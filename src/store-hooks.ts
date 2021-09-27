import { useEffect, useRef, useState } from 'react';
import { Store } from './store';

/**
 * @param {Store} store  - Store to subscribe.
 * @param {Function} callback - Function to call on each dipatch.
 * @param {Function} errorCallback - Function to call on each error dipatch.
 */
export function useStoreSubcription<T>(
  store: Store<T>,
  callback?: (data: T) => void,
  errorCallback?: (data: Error) => void,
): void {
  const callbacksRef = useRef({
    callback,
    errorCallback,
  });

  callbacksRef.current = {
    callback,
    errorCallback,
  };

  const hasCallBack = Boolean(callback);
  const hasErrorCallBack = Boolean(errorCallback);
  useEffect(() => {
    if (!hasCallBack) {
      return;
    }
    const unsubscribe = store.subscribe((data) => {
      if (callbacksRef.current.callback) {
        callbacksRef.current.callback(data);
      }
    });

    return () => {
      unsubscribe.unsubscribe();
    };
  }, [store, hasCallBack]);

  useEffect(() => {
    if (!hasErrorCallBack) {
      return;
    }
    const unsubscribe = store.subscribeError((data) => {
      if (callbacksRef.current.errorCallback) {
        callbacksRef.current.errorCallback(data);
      }
    });

    return () => {
      unsubscribe.unsubscribe();
    };
  }, [store, hasErrorCallBack]);
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

/**
 * @param {Store} store - Store to subscribe.
 * @returns {Object} - Resulto object from the store.
 */
export function useStoreError<T>(store: Store<T>): Error | null {
  const [state, setState] = useState<Error | null>(null);

  useStoreErrorSubscription(store, (data) => {
    setState(data as Error);
  });

  return state;
}
