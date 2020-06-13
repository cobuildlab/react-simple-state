import { Subscription } from 'rxjs';
declare type EventParams<T> = {
    initialValue?: T;
    reducer?: Function;
};
/**
 * New Event Classes
 */
export declare class Event<T> {
    #private;
    constructor(eventDescriptor: EventParams<T>);
    subscribe(subscriber: (value?: T) => void, receiveLastValue?: boolean): Subscription;
    dispatch<T>(value: T): void;
    get<T>(): T | undefined;
}

export declare function createEvent<T>(eventDescriptor: EventParams<T>): Event<T>;
export { };
