import {Event} from "./event";

export type Store = {
    subscribe: Function
};

export type LocalObserver<T> = {
    store?: Store
    eventName?: string
    event?: Event<T>
    callback: (value?: T | null) => void
    receiveLastValue: boolean
};
