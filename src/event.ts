import {
  ConcretePublisher,
  Publisher,
  Subscriber,
  Subscription,
} from './pub-sub';

type Reducer<T, U> = (value: U) => T;

type EventParams<T, U> = {
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
  private errorPublisher: Publisher<Error> = new ConcretePublisher();

  constructor(eventDescriptor?: EventParams<T, U>) {
    if (eventDescriptor && eventDescriptor.initialValue)
      this.value = eventDescriptor.initialValue;
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

  subscribeError(subscriber: (value: Error | null) => void): Subscription {
    const _subscriber: Subscriber<Error> = {
      update: subscriber,
    };
    return this.errorPublisher.subscribe(_subscriber);
  }

  dispatch(eventValue: T | U | null): void {
    const value = Object.freeze(
      this.reducer !== null && this.reducer !== undefined
        ? this.reducer(eventValue as U)
        : (eventValue as T),
    );

    this.value = value;
    this.publisher.notify(value);
  }
  dispatchError(value: Error): void {
    this.errorPublisher.notify(value);
  }
  get(): T | null {
    return Object.freeze(this.value);
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
  }
}

/**
 * Creates an event from a descriptor.
 *
 * @param eventDescriptor
 */
export function createEvent<T, U>(
  eventDescriptor?: EventParams<T, U>,
): Event<T, U> {
  return new Event<T, U>(eventDescriptor);
}
