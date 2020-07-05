import { Component } from "react";
import { Event } from "./event";
import {Subscription} from "./pub-sub";
import {LocalObserver} from "./types";

export abstract class View<T> extends Component {
    private subscriptions: Subscription[] = [];
    private toBeSubscribedIfUnMounted: LocalObserver<T>[] = [];
    private hasBeenUnmounted: boolean = false;

    /**
     * Subscribe to an Event
     * This is a helpful method to keep track of your subscriptions on UnMount and Mount of the Component
     * @param {Event} event - The Event object to which you want to subscribe
     * @param {Function }callback - The callback function that's gonna be executed when it happens
     * @param {boolean}receiveLastValue - Whether the callback should receive the last value immediately
     * @return {Subscription} subscription The subscription for this event in the Store
     */
    subscribe(event: Event<T>, callback: (value?: T | null) => void, receiveLastValue = false) {
        const subscription = event.subscribe(callback, receiveLastValue);
        this.subscriptions.push(subscription);
        // on an event where the component is unmounted and then mounted:
        this.toBeSubscribedIfUnMounted.push({ event, callback, receiveLastValue });
        return subscription;
    }

    componentDidMount() {
        if (!this.hasBeenUnmounted)
            return;
        const that = this;
        this.toBeSubscribedIfUnMounted.forEach(observer => {
            const store = observer.store;
            if (store !== null && store !== undefined) {
                const subscription = store.subscribe(observer.eventName, observer.callback, observer.receiveLastValue);
                that.subscriptions.push(subscription);
            } else {
                const event = observer.event;
                if (event !== null && event !== undefined) {
                    const subscription = event.subscribe(observer.callback, observer.receiveLastValue);
                    that.subscriptions.push(subscription);
                }
            }
        });

    }

    componentWillUnmount() {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
        this.hasBeenUnmounted = true;
    }
}
