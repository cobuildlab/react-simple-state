import { useEffect, useRef, useState } from 'react';
import { Store } from './store';

/**
 * @param {Store} store  - Store to subscribe.
 * @param {Function} callback - Function to call on each dipatch.
 */
export function useStoreSubcription<T>(
  store: Store<T>,
  callback: (data: T) => void,
): void {
  const callbacksRef = useRef({
    callback,
  });

  callbacksRef.current = {
    callback,
  };

  useEffect(() => {
    const unsubscribeSuccess = store.subscribe((data) => {
      if (callbacksRef.current.callback) {
        callbacksRef.current.callback(data);
      }
    });

    return () => {
      unsubscribeSuccess.unsubscribe();
    };
  }, [store]);
}

/**
 * @param {Store} store  - Store to subscribe.
 * @param {Function} errorcCallback - Function to call on each error dipatch.
 */
export function useStoreErrorSubscription<T>(
  store: Store<T>,
  errorcCallback: (data: Error) => void,
): void {
  const callbacksRef = useRef({
    errorcCallback,
  });

  callbacksRef.current = {
    errorcCallback,
  };

  useEffect(() => {
    const unsubscribeError = store.subscribeError((data) => {
      if (callbacksRef.current.errorcCallback) {
        callbacksRef.current.errorcCallback(data);
      }
    });

    return () => {
      unsubscribeError.unsubscribe();
    };
  }, [store]);
}

/**
 * @param {Store} store - Store to subscribe.
 * @returns {Object} - Resulto object from the store.
 */
export function useStore<T>(store: Store<T>): T {
  const [state, setState] = useState(store.get());

  useStoreSubcription(store, (data) => {
    setState(data);
  });

  return state;
}
