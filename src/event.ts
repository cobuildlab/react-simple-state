import {ConcretePublisher, Publisher, Subscriber, Subscription} from "./pub-sub";

type Reducer<T> = (value: T | null) => T | null;

type EventParams<T> = {
    initialValue?: T | null;
    reducer?: Reducer<T>;
};

/**
 * New Event Classes
 */
export class Event<T> {
    private value: T | null = null;
    private readonly reducer?: Reducer<T>;
    private publisher: Publisher<T> = new ConcretePublisher();

    constructor(eventDescriptor?: EventParams<T>) {
        if (eventDescriptor && eventDescriptor.initialValue)
            this.value = eventDescriptor.initialValue;
        this.reducer = eventDescriptor?.reducer;
    }

    subscribe(subscriber: (value: T | null) => void, receiveLastValue = false): Subscription {
        const _subscriber: Subscriber<T> = {
            update: subscriber
        }
        if (receiveLastValue)
            subscriber(this.get())
        return this.publisher.subscribe(_subscriber);
    }

    dispatch(value: T | null) {
        if (this.reducer !== null && this.reducer !== undefined)
            value = this.reducer(value);
        value = Object.freeze(value);
        this.value = value;
        this.publisher.notify(value);
    }

    get(): T | null {
        return Object.freeze(this.value);
    }

    /**
     * Removes all data from the Event store
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
export function createEvent<T>(eventDescriptor?: EventParams<T>): Event<T> {
    return new Event<T>(eventDescriptor);
};

