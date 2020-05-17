import {useEffect, useState} from "react";
import {Event} from "./event";

/**
 * React Hook to subscribe to an specific event
 * @param {Event} event - The event to subscribe.
 * @param {Function} callback -  A function to be called when the subscription gets triggered.
 */
const useSubscription = (event: Event, callback: (value?: any) => void) => {
    useEffect(() => {
        const subscription = event.subscribe(callback);
        return () => {
            subscription.unsubscribe();
        };
    });
};
export {useSubscription};

export type EventHookParams = {
    initialValue?: any
    reducer?: Function
    receiveLastValue: false
}

/**
 * React Hook to subscribe to an Event.
 * @param {Event} event - The event.
 * @param {any} initialValue -  An Initial Value for the state.
 * @param {Function} reducer - A function to transform the state before return the value.
 */
const useEvent = (event: Event, params: EventHookParams) => {
    const [value, setValue] = useState(params.receiveLastValue ? event.get : params.initialValue);

    useEffect(() => {
        const handleStateChange = (state?: any) => {
            if (params.reducer)
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
