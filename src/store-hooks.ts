import { useEffect, useRef, useState } from 'react';
import { Store } from './store';

/**
 * @param {Store} store  - Store to subscribe.
 * @param {Function} callback - Function to call on each dipatch.
 * @param {Function} errorcCallback - Function to call on each error dipatch.
 */
export function useStoreSub<T>(
  store: Store<T>,
  callback: ((data: T) => void) | undefined = undefined,
  errorcCallback: ((data: Error) => void) | undefined = undefined,
): void {
  const callbacksRef = useRef({
    callback,
    errorcCallback,
  });

  callbacksRef.current = {
    callback,
    errorcCallback,
  };

  useEffect(() => {
    const unsubscribeSuccess = store.subscribe((data) => {
      if (callbacksRef.current.callback) {
        callbacksRef.current.callback(data);
      }
    });

    const unsubscribeError = store.subscribeError((data) => {
      if (callbacksRef.current.errorcCallback) {
        callbacksRef.current.errorcCallback(data);
      }
    });

    return () => {
      unsubscribeSuccess.unsubscribe();
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

  useStoreSub(store, (data) => {
    setState(data);
  });

  return state;
}
