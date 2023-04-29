import { CheckGeneric } from './types';
import { Event } from './event';

export type Reducer<T, U> = (value: U) => T;

export interface StorageInterface {
  setItem(key: string, value: string): Promise<void>;

  getItem(key: string): Promise<string | null>;

  removeItem(key: string): Promise<void>;
}

export class LocalStorage implements StorageInterface {
  constructor() {
    if (typeof window === 'undefined')
      throw new Error('LocalStorage is not available in this environment');
  }

  getItem(key: string): Promise<string | null> {
    return Promise.resolve(window.localStorage.getItem(key));
  }

  setItem(key: string, value: string): Promise<void> {
    return Promise.resolve(window.localStorage.setItem(key, value));
  }

  removeItem(key: string): Promise<void> {
    return Promise.resolve(window.localStorage.removeItem(key));
  }

}

export type PersistedEventParams<T, U> = {
  initialValue?: T | null;
  reducer?: Reducer<T, U>;
  storageKey: string;
  storage: StorageInterface;
};


export class PersistedEvent<T, U = unknown> extends Event<T, U> {
  private storageKey: string;
  private storage: StorageInterface;

  constructor(eventDescriptor?: PersistedEventParams<T, U>) {
    super(eventDescriptor);
    if (!eventDescriptor?.storageKey) throw new Error('storageKey is required');
    if (!eventDescriptor?.storage) throw new Error('storage is required');
    this.storageKey = eventDescriptor.storageKey;
    this.storage = eventDescriptor.storage;
    this.storage.getItem(this.storageKey).then((value) => {
      if (value) {
        this.value = JSON.parse(value);
        this.isEventEmpty = false;
      }
    }).catch((error) => {
      console.error('PersistedEvent:constructor', error);
    });
  }

  dispatch(eventValue: CheckGeneric<T, U> | null): void {
    super.dispatch(eventValue);
    this.storage.setItem(this.storageKey, JSON.stringify(this.value)).catch((error) => {
      console.error('PersistedEvent:dispatch', error);
    });
  }

  clear(dispatch = false): void {
    super.clear(dispatch);
    this.storage.removeItem(this.storageKey).catch((error) => {
      console.error('PersistedEvent:clear', error);
    });
  }
}

export function createPersistedEvent<T, U = T>(
  eventDescriptor?: PersistedEventParams<T, U>,
): PersistedEvent<T, U> {
  return new PersistedEvent<T, U>(eventDescriptor);
}
