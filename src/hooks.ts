import {useEffect, useState, useCallback} from "react";
import {Event} from "./event";

/**
 * React Hook to subscribe to an specific event
 * @param {Event} event - The event to subscribe. The Event is considered constant across renders.
 * @param {Function} callback -  A function to be called when the subscription gets triggered.
 * @param {any[]} deps -  List of dependencies for the callback. Follow the same rules of useEffect.
 */
function useSubscription<T>(event: Event<T>, callback: (value?: T) => void, deps: any[]) {
    const _callback = useCallback(args => callback(args), [...deps]);

    useEffect(() => {
        const subscription = event.subscribe(_callback);
        return () => {
            subscription.unsubscribe();
        };
    }, [_callback]);
};

export {useSubscription};

export type EventHookParams<T> = {
    initialValue?: T;
    reducer?: (value?: T) => any;
}

/**
 * React Hook to subscribe to an Event.
 * @param {Event} event - The event.
 * @param {any} initialValue -  An Initial Value for the state, if not provided, the initial Value of the event will be the last value emitted.
 * @param {Function} reducer - A function to transform the state before return the value.
 */
function useEvent<T>(event: Event<T>, params?: EventHookParams<T>) {
    const [value, setValue] = useState((params && params.initialValue !== undefined) ? params.initialValue : event.get());
    const deps = (params && params.reducer !== undefined) ? [params.reducer] : [];

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
    }, deps);
    return value;
};
export {useEvent};
