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
  deps: U[] | undefined = undefined,
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
    const handleStateChange = (state?: any): void => {
      if (params?.reducer) state = params.reducer(state);
      setValue(state);
    };
    const subscription = event.subscribe(handleStateChange);
    return (): void => {
      subscription.unsubscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, params?.reducer]);
  return value;
}

export { useEvent };
