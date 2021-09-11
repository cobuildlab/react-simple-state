import { CheckDispatchType, Store } from './store';

/**
 * @param {Store} store - Event.
 * @param {Function} callback - Callback.
 * @param {Function} sideEffect - Callback.
 * @returns {Function} Reducer fucntion.
 */
export function createStoreAction<T, V extends unknown[], U = unknown>(
  store: Store<T, U>,
  callback:
    | ((prevState: T, ...params: V) => CheckDispatchType<T, U>)
    | ((prevState: T, ...params: V) => Promise<CheckDispatchType<T, U>>),
  sideEffect?: (...params: V) => void,
) {
  return (...params: V): void => {
    if (sideEffect) {
      sideEffect(...params);
    }
    const result = callback(store.get(), ...params);

    if (result instanceof Promise) {
      result
        .then((data) => {
          store.dispatch(data);
        })
        .catch((e) => {
          store.dispatchError(e);
        });
      return;
    }
    store.dispatch(result);
  };
}
