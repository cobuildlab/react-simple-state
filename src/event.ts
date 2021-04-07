import {
  ConcretePublisher,
  Publisher,
  Subscriber,
  Subscription,
} from './pub-sub';
import { CheckGeneric, Events, Reducers } from './types';

export type Reducer<T, U> = (value: U, prevState: T) => T;

export type EventParams<T, U> = {
  initialValue?: T | null;
  reducer?: Reducer<T, U>;
};

/**
 * New Event Classes.
 */
export class Event<T, U = unknown> {
  private value: T | null = null;
  private readonly reducer?: Reducer<T, U>;
  private publisher: Publisher<T> = new ConcretePublisher();
  private isEventEmpty = true;

  constructor(eventDescriptor?: EventParams<T, U>) {
    if (eventDescriptor && eventDescriptor.initialValue) {
      this.value = eventDescriptor.initialValue;
    }
    this.reducer = eventDescriptor?.reducer;
  }

  subscribe(
    subscriber: (value: T | null) => void,
    receiveLastValue = false,
  ): Subscription {
    const _subscriber: Subscriber<T> = {
      update: subscriber,
    };
    if (receiveLastValue) subscriber(this.get());
    return this.publisher.subscribe(_subscriber);
  }
  dispatch(eventValue: CheckGeneric<T, U> | null, state?: T): void {
    const prevState = (state || this.value) as T;
    const value = Object.freeze(
      this.reducer !== null && this.reducer !== undefined
        ? this.reducer(eventValue as U, prevState)
        : (eventValue as T),
    );

    this.value = value;
    this.publisher.notify(value);
    this.isEventEmpty = false;
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

/**
 * Creates an event from a descriptor.
 *
 * @param {EventParams} eventDescriptor - Event options.
 * @returns {Event} - Event object.
 */
export function createEvent<T, U = T>(
  eventDescriptor?: EventParams<T, U>,
): Event<T, U> {
  return new Event<T, U>(eventDescriptor);
}

/**
 * @template T .
 * @param {T} initalState - Initial state.
 * @param {Reducers} events - Events inputs tu create.
 * @returns {Events} - Returned events.
 */
export function createEvents<T, U>(
  initalState: T,
  events: Reducers<T, U>,
): Events<T, U> {
  const arrKeys = Object.keys(events) as (keyof Reducers<T, U>)[];

  const result = arrKeys.reduce((prev, key) => {
    return {
      ...prev,
      [key]: createEvent({
        initialValue: initalState,
        reducer: events[key].reducer,
      }),
    };
  }, {} as Events<T, U>);

  return result;
}
