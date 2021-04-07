import { useCallback, useEffect, useRef, useState } from 'react';
import { Event } from './event';
import {
  ActionType,
  CheckGeneric,
  Dispatchs,
  EventHookParams,
  Events,
  UseActionOptions,
  UseCallActionReturn,
  useEventReturn,
  UseFetchActionOptions,
  UseFetchActionReturn,
} from './types';

/**
 * React Hook to subscribe to an specific event.
 *
 * @param {Event} event - The event to subscribe. The Event is considered constant across renders.
 * @param {Function} callback -  A function to be called when the subscription gets triggered.
 * @param {any[]} deps -  List of dependencies for the callback. Follow the same rules of useEffect.
 * @returns {void} - Void hook.
 */
export function useSubscription<T, U, V = unknown>(
  event: Event<T, V>,
  callback: (value: T | null) => void,
  deps: U[] | undefined = undefined,
): void {
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

/**
 * React Hook to subscribe to an Event.
 *
 * @param {Event} event - The event.
 * @param {object}  params - Params.
 * @param {object}  params.initialValue - Initial Value.
 * @param {Function}  params.reducer - Reducer for transform the data.
 * @returns {object} Data object.
 */
export function useEvent<U, T = U, V = unknown>(
  event: Event<T, V>,
  params?: EventHookParams<T, U>,
): useEventReturn<T, U> {
  const { reducer, initialValue } = params || {};
  const [value, setValue] = useState(() => {
    if (initialValue && event.isEmpty()) {
      return initialValue;
    } else if (reducer) {
      return reducer(event.get() as T);
    }

    return event.get();
  });

  const reducerRef = useRef(params?.reducer);
  reducerRef.current = params?.reducer;
  useEffect(() => {
    const handleStateChange = (state: T | null): void => {
      const eventState = reducerRef.current
        ? reducerRef.current(state as T)
        : state;

      setValue(eventState);
    };
    const subscription = event.subscribe(handleStateChange);
    return (): void => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);

  return value as useEventReturn<T, U>;
}

/**
 * Hook that handle fetch promise actions, like querys to database.
 * This hook uses a declarative pattern.
 *
 * @param {ActionType} action - Action to fetch.
 * @param {Array} params - Param to call the action.
 * @param {UseFetchActionOptions} options - Option to handle the actions.
 * @param {Function} options.onCompleted - A callback to be called when the promise get resolved.
 * @param {Function} options.onError - A callback to be called when an error occurs.
 * @param {Function} options.skip - To skip the fetch ultil some validation happen.
 * @returns {UseFetchActionReturn} - Hook state result.
 */
export function useFetchAction<
  T,
  U extends any[],
  R = unknown,
  E = Error | null
>(
  action: ActionType<T, U, E, R>,
  params: U,
  options?: UseFetchActionOptions<T, E>,
): UseFetchActionReturn<T, E> {
  const { onCompleted, onError, skip } = options || {};

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
    setState((state) => ({ ...state, loading: true }));
    action(...params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, ...params]);

  useEffect(() => {
    if (skip) {
      return;
    }
    fetch();
  }, [fetch, skip]);

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
 * @param {UseActionOptions} options - Option to handle the actions.
 * @param {Function} options.onCompleted - A callback to be called when the promise get resolved.
 * @param {Function} options.onError - A callback to be called when an error occurs.
 * @returns {UseCallActionReturn} - Hook state result.
 */
export function useCallAction<
  T,
  U extends any[],
  R = unknown,
  E = Error | null
>(
  action: ActionType<T, U, E, R>,
  options?: UseActionOptions<T, E>,
): UseCallActionReturn<T, U, E> {
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

  const call = useCallback(
    (...params: U) => {
      setState((state) => ({ ...state, loading: true }));
      action(...params);
    },
    [action],
  );

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

/**
 * @template T .
 * @template U .
 * @param {Events<T, U>} events - Events.
 * @param {T} initialState - Default state if no default state if passed the hook will use the initial state of the first event.
 * @returns {[T,Dispatchs<T, U>]} Tuple with hook state.
 */
export function useEvents<T, U>(
  events: Events<T, U>,
  initialState: () => T | T,
): [T, () => Dispatchs<T, U>] {
  const [state, setState] = useState(() => {
    if (initialState) {
      return typeof initialState === 'function' ? initialState() : initialState;
    }

    const event = (Object.values(events) as Array<Event<T, U[keyof U]>>)[0];

    return event.get();
  });

  const arrKeys = Object.keys(events) as (keyof Events<T, U>)[];

  const dispatchs = arrKeys.reduce((prev, key) => {
    const event = events[key];
    return {
      ...prev,
      [key]: (value: CheckGeneric<T, U[keyof U]>) =>
        event.dispatch(value, state as T),
    };
  }, {} as Dispatchs<T, U>);

  const ref = useRef(dispatchs);
  ref.current = dispatchs;

  const dispatchsCallback = useCallback(() => ref.current, []);

  useEffect(() => {
    const arrKeys = Object.keys(events) as (keyof Events<T, U>)[];
    const subscriptions = arrKeys.map((key) =>
      events[key].subscribe((value) => setState(value)),
    );

    return () => {
      subscriptions.forEach((sub) => {
        sub.unsubscribe();
      });
    };
  }, [events]);

  return [state as T, dispatchsCallback];
}
