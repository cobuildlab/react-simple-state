import { Event } from "./event";
export declare type Store = {
    subscribe: Function;
};
export declare type Subscription = {
    unsubscribe: Function;
};
export declare type LocalObserver = {
    store?: Store;
    eventName?: string;
    event?: Event;
    callback: (value?: any) => void;
    receiveLastValue: boolean;
};
