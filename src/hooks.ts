import { useEffect, useState } from "react";
import { Event } from "./event";

/**
 * React Hook to subscribe to an specific event
 * @param {Event} event - The event to subscribe.
 * @param {Function} callback -  A function to be called when the subscription gets triggered.
 */
function useSubscription<T>(event: Event<T>, callback: (value?: T) => void) {
    useEffect(() => {
        const subscription = event.subscribe(callback);
        return () => {
            subscription.unsubscribe();
        };
    });
};
export { useSubscription };

export type EventHookParams<T> = {
    initialValue?: T;
    reducer?: (value?: T) => any;
};

/**
 * React Hook to subscribe to an Event.
 * @param {Event} event - The event.
 * @param {EventHookParams} params -  An Initial Value for the state.
 */
function useEvent<T>(event: Event<T>, params?: EventHookParams<T>) {
    const [value, setValue] = useState(event.get() ?? params?.initialValue);

    useSubscription(event, (_value) => {
        if (params?.reducer) {
        _value = params.reducer(_value);
        }
        setValue(_value);
    });

    return value;
};
export { useEvent };
