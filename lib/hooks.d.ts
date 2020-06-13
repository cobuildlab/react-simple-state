import { Event } from "./event";
/**
 * React Hook to subscribe to an specific event
 * @param {Event} event - The event to subscribe.
 * @param {Function} callback -  A function to be called when the subscription gets triggered.
 */
declare function useSubscription<T>(event: Event<T>, callback: (value?: T) => void): void;
export { useSubscription };
export declare type EventHookParams<T> = {
    initialValue?: T;
    reducer?: Function;
    receiveLastValue: false;
};
/**
 * React Hook to subscribe to an Event.
 * @param {Event} event - The event.
 * @param {any} initialValue -  An Initial Value for the state.
 * @param {Function} reducer - A function to transform the state before return the value.
 */
declare function useEvent<T>(event: Event<T>, params: EventHookParams<T>): T | undefined;
export { useEvent };
