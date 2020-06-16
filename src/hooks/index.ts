import { useEffect, useState, useCallback } from 'react';
import { Observer } from './../core/observer';

/**
 * @param {Observer} store - Store for the data flow.
 * @returns {object} State object.
 */
export function useStoreValue<T>(store: Observer<T>): T {
  const [state, setState] = useState<T>(() => store.getState());

  useEffect(() => {
    const updateState = (newState: T) => {
      setState(newState);
    };
    store.subscribe(updateState);

    return () => {
      store.unSubscribe(updateState);
    };
  }, [store]);

  return state;
}

/**
 * @param {Observer} store - Store for the data flow.
 * @returns {[object,Function]} State object and Set state function tuple.
 */
export function useStore<T>(store: Observer<T>): [T, Function] {
  const state = useStoreValue(store);

  const setNewState = useCallback(
    (stateCallback) => {
      const newState =
        typeof stateCallback === 'function'
          ? stateCallback(store.getState())
          : stateCallback;
      store.notify(newState);
    },
    [store],
  );

  return [state, setNewState];
}
