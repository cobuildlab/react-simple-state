import {Subject, Subscription} from 'rxjs';
import {NextObserver} from 'rxjs/internal/types';
import * as clone from "ramda/src/clone";

type EventParams = {
    initialValue?: any
    reducer?: Function
};

/**
 * New Event Classes
 */
export class Event {
    #value: any = null;
    #reducer?: Function | null = null;
    #subject: Subject<any> = new Subject()

    constructor(eventDescriptor?: EventParams) {
        this.#value = eventDescriptor?.initialValue;
        this.#reducer = eventDescriptor?.reducer;
    }

    subscribe(subscriber: (value?: any) => void, receiveLastValue = false): Subscription {
        const observer: NextObserver<any> = {
            next: subscriber
        }
        if (receiveLastValue)
            subscriber(this.get())
        return this.#subject.subscribe(observer);
    }

    dispatch(value: any) {
        if (this.#reducer !== null && this.#reducer !== undefined)
            value = this.#reducer(value);
        value = clone(value);
        this.#value = value;
        this.#subject.next(value);
    }

    get(): any {
        return clone(this.#value);
    }
}

export const createEvent = (eventDescriptor?: EventParams): Event => {
    return new Event(eventDescriptor);
};

