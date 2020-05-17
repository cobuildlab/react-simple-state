import { Component } from "react";
import { Event } from "./event";
export declare abstract class View extends Component {
    #private;
    /**
     * Subscribe to an Event
     * This is a helpful method to keep track of your subscriptions on UnMount and Mount of the Component
     * @param {Event} event - The Event object to which you want to subscribe
     * @param {Function }callback - The callback function that's gonna be executed when it happens
     * @param {boolean}receiveLastValue - Whether the callback should receive the last value immediately
     * @return {Subscription} subscription The subscription for this event in the Store
     */
    subscribe(event: Event, callback: (value?: any) => void, receiveLastValue?: boolean): import("rxjs").Subscription;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
