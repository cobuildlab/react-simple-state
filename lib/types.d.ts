import { Event } from "./event";
export declare type Store = {
    subscribe: Function;
};
export declare type Subscription = {
    unsubscribe: Function;
};
export declare type LocalObserver<T> = {
    store?: Store;
    eventName?: string;
    event?: Event<T>;
    callback: (value?: T) => void;
    receiveLastValue: boolean;
};
