import { Event } from "./event";
/**
 * React Hook to subscribe to an specific event
 * @param {Event} event - The event to subscribe.
 * @param {Function} callback -  A function to be called when the subscription gets triggered.
 */
declare const useSubscription: (event: Event, callback: (value?: any) => void) => void;
export { useSubscription };
export declare type EventHookParams = {
    initialValue?: any;
    reducer?: Function;
    receiveLastValue: false;
};
/**
 * React Hook to subscribe to an Event.
 * @param {Event} event - The event.
 * @param {any} initialValue -  An Initial Value for the state.
 * @param {Function} reducer - A function to transform the state before return the value.
 */
declare const useEvent: (event: Event, params: EventHookParams) => any;
export { useEvent };
