import { Subscription } from 'rxjs';
declare type EventParams = {
    initialValue?: any;
    reducer?: Function;
};
/**
 * New Event Classes
 */
export declare class Event {
    #private;
    constructor(eventDescriptor: EventParams);
    subscribe(subscriber: (value?: any) => void, receiveLastValue?: boolean): Subscription;
    dispatch(value: any): void;
    get(): any;
}
export declare const createEvent: (eventDescriptor: EventParams) => Event;
export {};
