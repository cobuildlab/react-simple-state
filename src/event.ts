import { ConcretePublisher, Publisher, Subscriber, Subscription } from './pub-sub';
import { CheckGeneric, Events } from './types';

export type Reducer<T, U> = (value: U, prevState: T) => T;

export type EventParams<T, U> = {
  initialValue?: T | null;
  reducer?: Reducer<T, U>;
  shared?: boolean;
};

/**
 * New Event Classes.
 */
export class Event<T, U = unknown> {
  private value: T | null = null;
  private sharedValue: T | null = null;
  private readonly reducer?: Reducer<T, U>;
  private publisher: Publisher<T> = new ConcretePublisher();
  private isEventEmpty = true;
  isShared = false;

  constructor(eventDescriptor?: EventParams<T, U>) {
    if (eventDescriptor && eventDescriptor.initialValue) {
      this.value = eventDescriptor.initialValue;
    }
    this.isShared = Boolean(eventDescriptor?.shared);
    this.reducer = eventDescriptor?.reducer;
  }

  subscribe(subscriber: (value: T | null) => void, receiveLastValue = false): Subscription {
    const _subscriber: Subscriber<T> = {
      update: subscriber,
    };
    if (receiveLastValue) subscriber(this.get());
    return this.publisher.subscribe(_subscriber);
  }

  dispatch(eventValue: CheckGeneric<T, U> | null): void {
    const prevState = this.isShared ? this.sharedValue : this.value;
    const value = Object.freeze(
      this.reducer !== null && this.reducer !== undefined ? this.reducer(eventValue as U, prevState as T) : (eventValue as T),
    );

    this.value = value;
    this.publisher.notify(value);
    this.isEventEmpty = false;
  }

  sharedDispatch(value: T | null): void {
    this.sharedValue = value;
  }

  get(): T | null {
    return Object.freeze(this.value);
  }
  isEmpty(): boolean {
    return this.isEventEmpty;
  }
  /**
   * Removes all data from the Event store.
   *
   * @param {boolean} dispatch -
   */
  clear(dispatch = false): void {
    if (dispatch) {
      this.dispatch(null); // Empty dispatch
    } else {
      this.value = null;
    }
    this.isEventEmpty = true;
  }
}

export class MixedEvent<T, U, V = unknown> extends Event<T, V> {
  events: Events<T, U>;

  constructor(events: Events<T, U>, eventDescriptor?: EventParams<T, V>) {
    super(eventDescriptor);
    this.events = events;

    this.setup();
  }

  private setup(): void {
    const arrKeys = Object.keys(this.events) as (keyof Events<T, U>)[];

    this.subscribe((value) => {
      arrKeys.forEach((key) => {
        const event = this.events[key];

        if (!event.isShared) {
          throw Error(`Event "${key}" must be a shared Event`);
        }

        event.sharedDispatch(value);
      });
    });

    const callback = (v: T | null) => this.dispatch(v as CheckGeneric<T, V>);

    arrKeys.forEach((key) => {
      const event = this.events[key];
      event.subscribe(callback);
    });
  }
}
/**
 * Creates an event from a descriptor.
 *
 * @param {EventParams} eventDescriptor - Event options.
 * @returns {Event} - Event object.
 */
export function createEvent<T, U = T>(eventDescriptor?: EventParams<T, U>): Event<T, U> {
  return new Event<T, U>(eventDescriptor);
}

/**
 * @template T .
 * @param {Events} events - Events to subscribe.
 * @param {EventParams} eventDescriptor - Event options.
 * @returns {MixedEvent} - Returned mixed event.
 */
export function createMixedEvent<T, U, V = unknown>(events: Events<T, U>, eventDescriptor?: EventParams<T, V>): MixedEvent<T, U, V> {
  return new MixedEvent(events, eventDescriptor);
}
