import {
  ConcretePublisher,
  ConcretePublisherV2,
  PublisherV2,
  SubscriberV2,
  Subscription,
} from './pub-sub';

type Reducer<T, R> = (prevState: T, newState: R) => T;
export type CheckDispatchType<T, R> = R extends unknown ? T : R;

export type StoreParams<T, R> = {
  initialValue: T;
  reducer?: Reducer<T, R>;
};
export class Store<T, R = unknown> {
  private value: T;
  private initialValue: T;
  private publisher: PublisherV2<T> = new ConcretePublisherV2();
  private errorPublisher: PublisherV2<Error> = new ConcretePublisher();
  private reducer: Reducer<T, R> | undefined;

  constructor(eventDescriptor: StoreParams<T, R>) {
    this.value = eventDescriptor.initialValue;
    this.initialValue = eventDescriptor.initialValue;

    this.reducer = eventDescriptor.reducer;
  }

  subscribe(
    subscriber: (value: T) => void,
    receiveLastValue = false,
  ): Subscription {
    const _subscriber: SubscriberV2<T> = {
      update: subscriber,
    };
    if (receiveLastValue) subscriber(this.get());
    return this.publisher.subscribe(_subscriber);
  }

  subscribeError(subscriber: (value: Error) => void): Subscription {
    const _subscriber: SubscriberV2<Error> = {
      update: subscriber,
    };
    return this.errorPublisher.subscribe(_subscriber);
  }

  dispatch(eventValue: CheckDispatchType<T, R>): void {
    const value = this.reducer
      ? this.reducer(this.value, eventValue as R)
      : this.value;

    this.value = value;

    this.publisher.notify(Object.freeze(value));
  }

  dispatchError(value: Error): void {
    this.errorPublisher.notify(value);
  }

  get(): T {
    return Object.freeze(this.value);
  }

  /**
   * Removes all data from the Event store.
   *
   * @param {boolean} dispatch -
   */
  clear(dispatch = false): void {
    this.value = this.initialValue;

    if (dispatch) {
      this.dispatch(this.value); // Empty dispatch
    }
  }
}
