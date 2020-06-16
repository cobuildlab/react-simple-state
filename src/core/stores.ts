// eslint-disable-next-line no-unused-vars
import { IObserberReducer } from './observer';
import { Observer } from './observer';

interface Store<T> {
  initialState: T;
  reducer?: IObserberReducer<T>;
}
interface DerivedStore<T, P> {
  initialState?: T;
  parent: Observer<P>;
  reducer: IObserberReducer<T, P>;
}
/**
 * @param {object} config - Config object.
 * @returns {Observer} Observer instance.
 */
export function store<T>(config: Store<T>): Observer<T> {
  const { initialState, reducer } = config;
  const observer = new Observer(initialState, reducer);
  return observer;
}
/**
 * @param {object} config - Config object.
 * @returns {Observer} Observer instance.
 */
export function derivedStore<T, R>(config: DerivedStore<T, R>): Observer<T, R> {
  const { initialState, reducer, parent } = config;
  const state =
    initialState !== undefined ? initialState : reducer(parent.getState());

  return new Observer(state, reducer, parent);
}
