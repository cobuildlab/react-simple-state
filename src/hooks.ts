import { useEffect, useRef, useState } from 'react';
import { Event } from './event';

/**
 * React Hook to subscribe to an specific event.
 *
 * @param {Event} event - The event to subscribe. The Event is considered constant across renders.
 * @param {Function} callback -  A function to be called when the subscription gets triggered.
 * @param {any[]} deps -  List of dependencies for the callback. Follow the same rules of useEffect.
 */
function useSubscription<T, U>(
  event: Event<T>,
  callback: (value: T | null) => void,
  deps: U[] | undefined,
) {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  if (deps) {
    console.warn(`Deps param has been deprecated, it is not useful anymore.`);
  }

  useEffect(() => {
    const subscriptionCallback = (eventData: T | null) => {
      callbackRef.current(eventData);
    };
    const subscription = event.subscribe(subscriptionCallback);
    return () => {
      subscription.unsubscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);
}

export { useSubscription };

export type EventHookParams<T> = {
  initialValue?: T;
  reducer?: (value?: T) => any;
};

/**
 * React Hook to subscribe to an Event.
 *
 * @param {Event} event - The event.
 * @param {object}  params - Params.
 * @param {object}  params.initialValue - Initial Value.
 * @param {object}  params.reducer - Reducer for transform the data.
 * @returns {object} Data object.
 */
function useEvent<T>(event: Event<T>, params?: EventHookParams<T>) {
  const [value, setValue] = useState(
    params && params.initialValue !== undefined
      ? params.initialValue
      : event.get(),
  );

  useEffect(() => {
    const handleStateChange = (state?: any) => {
      if (params?.reducer) state = params.reducer(state);
      setValue(state);
    };
    const subscription = event.subscribe(handleStateChange);
    return () => {
      subscription.unsubscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, params?.reducer]);
  return value;
}

/**
 * * React Hook to subscribe to an Event.
 *
 * @param {Event} event - The event.
 * @param {Function} successCallback - Callback function to run on event dispatch.
 * @param {Function} errorCallback - Callback function to run on event Error dispatch.
 */
export function useXSubscription<T>(
  event: Event<T>,
  successCallback: (value: T | null) => void,
  errorCallback: (value: Error | null) => void,
) {
  const callbackRef = useRef({ successCallback, errorCallback });

  callbackRef.current = { successCallback, errorCallback };

  useEffect(() => {
    const subscriptionCallback = (eventData: T | null) => {
      callbackRef.current.successCallback(eventData);
    };

    const subscriptionErrorCallback = (eventData: Error | null) => {
      callbackRef.current.errorCallback(eventData);
    };

    const subscription = event.subscribe(subscriptionCallback);
    const subscriptionError = event.subscribeError(subscriptionErrorCallback);

    return () => {
      subscription.unsubscribe();
      subscriptionError.unsubscribe();
    };
  }, [event]);
}

export { useEvent };
