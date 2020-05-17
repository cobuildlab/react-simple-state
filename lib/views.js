'use strict';
var __classPrivateFieldGet =
  (this && this.__classPrivateFieldGet) ||
  function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError('attempted to get private field on non-instance');
    }
    return privateMap.get(receiver);
  };
var __classPrivateFieldSet =
  (this && this.__classPrivateFieldSet) ||
  function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError('attempted to set private field on non-instance');
    }
    privateMap.set(receiver, value);
    return value;
  };
var _subscriptions, _toBeSubscribedIfUnMounted, _hasBeenUnmounted;
Object.defineProperty(exports, '__esModule', { value: true });
exports.View = void 0;
const react_1 = require('react');
class View extends react_1.Component {
  constructor() {
    super(...arguments);
    _subscriptions.set(this, []);
    _toBeSubscribedIfUnMounted.set(this, []);
    _hasBeenUnmounted.set(this, false);
  }
  /**
   * Subscribe to an Event
   * This is a helpful method to keep track of your subscriptions on UnMount and Mount of the Component.
   *
   * @param {Event} event - The Event object to which you want to subscribe
   * @param {Function }callback - The callback function that's gonna be executed when it happens
   * @param {boolean}receiveLastValue - Whether the callback should receive the last value immediately
   * @returns {Subscription} subscription The subscription for this event in the Store
   */
  subscribe(event, callback, receiveLastValue = false) {
    const subscription = event.subscribe(callback, receiveLastValue);
    __classPrivateFieldGet(this, _subscriptions).push(subscription);
    // on an event where the component is unmounted and then mounted:
    __classPrivateFieldGet(this, _toBeSubscribedIfUnMounted).push({
      event,
      callback,
      receiveLastValue,
    });
    return subscription;
  }
  componentDidMount() {
    if (!__classPrivateFieldGet(this, _hasBeenUnmounted)) return;
    const that = this;
    __classPrivateFieldGet(this, _toBeSubscribedIfUnMounted).forEach(
      (observer) => {
        const store = observer.store;
        if (store !== null && store !== undefined) {
          const subscription = store.subscribe(
            observer.eventName,
            observer.callback,
            observer.receiveLastValue,
          );
          __classPrivateFieldGet(that, _subscriptions).push(subscription);
        } else {
          const event = observer.event;
          if (event !== null && event !== undefined) {
            const subscription = event.subscribe(
              observer.callback,
              observer.receiveLastValue,
            );
            __classPrivateFieldGet(that, _subscriptions).push(subscription);
          }
        }
      },
    );
  }
  componentWillUnmount() {
    __classPrivateFieldGet(this, _subscriptions).forEach((subscription) => {
      subscription.unsubscribe();
    });
    __classPrivateFieldSet(this, _subscriptions, []);
    __classPrivateFieldSet(this, _hasBeenUnmounted, true);
  }
}
exports.View = View;
(_subscriptions = new WeakMap()),
  (_toBeSubscribedIfUnMounted = new WeakMap()),
  (_hasBeenUnmounted = new WeakMap());
