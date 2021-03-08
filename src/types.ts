import { Event } from './event';

export type Store = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  subscribe: Function;
};

export type LocalObserver<T> = {
  store?: Store;
  eventName?: string;
  event?: Event<T>;
  callback: (value?: T | null) => void;
  receiveLastValue: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Arr = readonly any[];
export type CheckGeneric<T, R> = T extends R ? T : R;
export interface ActionType<T, U extends Arr, E, R = unknown> {
  (...params_0: U): Promise<
    | CheckGeneric<T, R>
    | {
        error: Error;
      }
  >;
  isAction: boolean;
  event: Event<T, R>;
  errorEvent: Event<E, unknown>;
}

export type UseActionOptions<T, E> = {
  onCompleted?: (data: T) => void;
  onError?: (error: E) => void;
};
export interface UseFetchActionOptions<T, E> extends UseActionOptions<T, E> {
  skip?: boolean;
}
export type UseFetchActionReturn<T, E> = [
  T,
  boolean,
  {
    error: E;
    refetch: () => void;
  },
];
export type UseCallActionReturn<T, E> = [
  () => void,
  boolean,
  {
    data: T;
    error: E;
  },
];

export type EventHookParams<T, U = T> = {
  initialValue?: U;
  reducer?: (value: T) => U;
};
export type useEventReturn<T, U> = T extends U ? T : U;
