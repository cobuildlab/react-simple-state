import { Subject, Subscription } from 'rxjs';
import { NextObserver } from 'rxjs/internal/types';
import * as clone from "ramda/src/clone";

type EventParams<T> = {
    initialValue?: T;
    reducer?: (value?: T) => void;
};

/**
 * New Event Classes
 */
export class Event<T> {
    private value: any = null;
    private reducer?: Function | null = null;
    private subject: Subject<T> = new Subject()

    constructor(eventDescriptor?: EventParams<T>) {
        this.value = eventDescriptor?.initialValue;
        this.reducer = eventDescriptor?.reducer;
    }

    subscribe(subscriber: (value?: T) => void, receiveLastValue = false): Subscription {
        const observer: NextObserver<any> = {
            next: subscriber
        }
        if (receiveLastValue)
            subscriber(this.get())
        return this.subject.subscribe(observer);
    }

    dispatch(value?: T) {
        if (this.reducer !== null && this.reducer !== undefined)
            value = this.reducer(value);
        value = clone(value);
        this.value = value;
        this.subject.next(value);
    }

    get(): T | undefined {
        return clone(this.value);
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

export function createEvent<T>(eventDescriptor?: EventParams<T>): Event<T> {
    return new Event<T>(eventDescriptor);
};

