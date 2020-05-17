import {Event} from "./event";

export type Store = {
    subscribe: Function
};

export type Subscription = {
    unsubscribe: Function
};

export type LocalObserver = {
    store?: Store
    eventName?: string
    event?: Event
    callback: (value?: any) => void
    receiveLastValue: boolean
};
