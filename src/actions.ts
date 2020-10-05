import { createEvent, Event } from './event';

/**
 * @param {Event} event - Event to bind the action.
 * @param {Function} action - Action to call.
 * @returns {Function} -  Function with the binded event.
 */
export function createAction<T, U extends any[], E = Error, V = unknown>(
  event: Event<T, V>,
  errorEvent: Event<E>,
  action: (...params: readonly [...U]) => Promise<T | V>,
) {
  const actionCallback = async (
    ...params: readonly [...U]
  ): Promise<T | V | { error: Error }> => {
    let data: T | V;

    try {
      data = await action(...params);
    } catch (error) {
      errorEvent.dispatch(error);
      return { error };
    }

    event.dispatch(data);
    return data;
  };

  // This properties allow to idetify actions and it events from services and other functions
  actionCallback.isAction = true;
  actionCallback.event = event;
  actionCallback.errorEvent = errorEvent;

  return actionCallback;
}
