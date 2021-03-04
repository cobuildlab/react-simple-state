import { useCallback, useEffect, useRef, useState } from 'react';
import { Event } from './event';
import {
  ActionType,
  UseActionOptions,
  UseCallActionReturn,
  UseFetchActionReturn,
} from './types';

/**
 * React Hook to subscribe to an specific event.
 *
 * @param {Event} event - The event to subscribe. The Event is considered constant across renders.
 * @param {Function} callback -  A function to be called when the subscription gets triggered.
 * @param {any[]} deps -  List of dependencies for the callback. Follow the same rules of useEffect.
 */
export function useSubscription<T, U>(
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
export function useEvent<T>(event: Event<T>, params?: EventHookParams<T>) {
  const [value, setValue] = useState(
    params && params.initialValue !== undefined
      ? params.initialValue
      : event.get(),
  );

  useEffect(() => {
    const handleStateChange = (state?: any): void => {
      const eventState = params?.reducer ? params.reducer(state) : state;

      setValue(eventState);
    };
    const subscription = event.subscribe(handleStateChange);
    return (): void => {
      subscription.unsubscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, params?.reducer]);
  return value;
}

/**
 * Hook that handle fetch promise actions, like querys to database.
 * This hook uses a declarative pattern.
 *
 * @param {ActionType} action - Action to fetch.
 * @param {Array} params - Param to call the action.
 * @param {UseActionOptions} options - Option to handle the actions.
 * @param {Function} options.onCompleted - A callback to be called when the promise get resolved.
 * @param {Function} options.onError - A callback to be called when an error occurs.
 * @returns {UseFetchActionReturn} - Hook state result.
 */
export function useFetchAction<T, U extends any[], E = Error | null>(
  action: ActionType<T, U, E>,
  params: U,
  options?: UseActionOptions<T, E>,
): UseFetchActionReturn<T, E> {
  const { onCompleted, onError } = options || {};

  const { event, errorEvent } = action;

  const [{ value, loading, error }, setState] = useState<{
    value: T | null;
    loading: boolean;
    error: E | null;
  }>(() => ({
    value: event.get(),
    loading: false,
    error: null,
  }));

  const callbacksRef = useRef({
    completed: onCompleted,
    error: onError,
  });

  callbacksRef.current = {
    completed: onCompleted,
    error: onError,
  };

  const fetch = useCallback(() => {
    console.log('calling fetch...');
    setState((state) => ({ ...state, loading: true }));
    action(...params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, ...params]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    const onSuccessCallback = (data: T | null) => {
      setState((state) => ({ ...state, loading: false, value: data }));
      if (callbacksRef.current.completed)
        callbacksRef.current.completed(data as T);
    };
    const onErrorCallback = (data: E | null) => {
      setState((state) => ({ ...state, loading: false, error: data }));
      if (callbacksRef.current.error) callbacksRef.current.error(data as E);
    };

    event.subscribe(onSuccessCallback);
    errorEvent.subscribe(onErrorCallback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, errorEvent]);
  return [
    value as T,
    loading,
    {
      error: error as E,
      refetch: fetch,
    },
  ];
}

/**
 * Hook that handle call promise actions, like mutations to database in a declarative way.
 *
 * @param {ActionType} action - The action to be called.
 * @param {Array} params - Array of the params to pass to the action.
 * @param {UseActionOptions} options - Option to handle the actions.
 * @param {Function} options.onCompleted - A callback to be called when the promise get resolved.
 * @param {Function} options.onError - A callback to be called when an error occurs.
 * @returns {UseCallActionReturn} - Hook state result.
 */
export function useCallAction<T, U extends any[], E = Error | null>(
  action: ActionType<T, U, E>,
  params: U,
  options?: UseActionOptions<T, E>,
): UseCallActionReturn<T, E> {
  const { onCompleted, onError } = options || {};

  const { event, errorEvent } = action;

  const [{ value, loading, error }, setState] = useState<{
    value: T | null;
    loading: boolean;
    error: E | null;
  }>(() => ({
    value: event.get(),
    loading: false,
    error: null,
  }));

  const callbacksRef = useRef({
    completed: onCompleted,
    error: onError,
  });

  callbacksRef.current = {
    completed: onCompleted,
    error: onError,
  };

  const call = useCallback(() => {
    setState((state) => ({ ...state, loading: true }));
    action(...params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, ...params]);

  useEffect(() => {
    const onSuccessCallback = (data: T | null) => {
      setState((state) => ({ ...state, loading: false, value: data }));
      if (callbacksRef.current.completed)
        callbacksRef.current.completed(data as T);
    };
    const onErrorCallback = (data: E | null) => {
      setState((state) => ({ ...state, loading: false, error: data }));
      if (callbacksRef.current.error) callbacksRef.current.error(data as E);
    };

    event.subscribe(onSuccessCallback);
    errorEvent.subscribe(onErrorCallback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, errorEvent]);
  return [
    call,
    loading,
    {
      error: error as E,
      data: value as T,
    },
  ];
}
