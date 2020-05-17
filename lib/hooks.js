'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useEvent = exports.useSubscription = void 0;
const react_1 = require('react');
/**
 * React Hook to subscribe to an specific event.
 *
 * @param {Event} event - The event to subscribe.
 * @param {Function} callback -  A function to be called when the subscription gets triggered.
 */
const useSubscription = (event, callback) => {
  react_1.useEffect(() => {
    const subscription = event.subscribe(callback);
    return () => {
      subscription.unsubscribe();
    };
  });
};
exports.useSubscription = useSubscription;
/**
 * React Hook to subscribe to an Event.
 *
 * @param {Event} event - The event.
 * @param {any} initialValue -  An Initial Value for the state.
 * @param {Function} reducer - A function to transform the state before return the value.
 * @param params
 */
const useEvent = (event, params) => {
  const [value, setValue] = react_1.useState(
    params.receiveLastValue ? event.get : params.initialValue,
  );
  react_1.useEffect(() => {
    const handleStateChange = (state) => {
      if (params.reducer) state = params.reducer(state);
      setValue(state);
    };
    const subscription = event.subscribe(handleStateChange);
    return () => {
      subscription.unsubscribe();
    };
  });
  return value;
};
exports.useEvent = useEvent;
