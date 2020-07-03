import {useEffect, useState} from "react";
import {Event} from "./event";

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
export {useSubscription};

export type EventHookParams<T> = {
    initialValue?: T;
    reducer?: (value?: T) => any;
};

/**
 * React Hook to subscribe to an Event.
 * @param {Event} event - The event.
 * @param {EventHookParams} params - Event Hook Params.
 * @param {any} params.initialValue -  An Initial Value for the state, if not provided, the initial Value of the event will be the last value emitted.
 * @param {Function} params.reducer - A function to transform the state before return the value.
 */
function useEvent<T>(event: Event<T>, params?: EventHookParams<T>) {
    const [value, setValue] = useState(event.get() ?? params?.initialValue);

    useEffect(() => {
        const handleStateChange = (state?: any) => {
            if (params?.reducer)
                state = params.reducer(state);
            setValue(state)
        };
        const subscription = event.subscribe(handleStateChange);
        return () => {
            subscription.unsubscribe();
        };
    });

    return value;
};
export {useEvent};
