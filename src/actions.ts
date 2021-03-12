import { Event } from './event';
import { ActionType, CheckGeneric } from './types';

/**
 * @param {Event} event - Event to bind the action.
 * @param {Event}  errorEvent - Event to bind on error.
 * @param {Function} action - Action to call.
 * @returns {Function} -  Function with the binded event.
 */
export function createAction<T, U extends any[], E = Error, R = unknown>(
  event: Event<T, R>,
  errorEvent: Event<E, E>,
  action: (...params: readonly [...U]) => Promise<CheckGeneric<T, R>>,
): ActionType<T, U, E, R> {
  const actionCallback = async (
    ...params: readonly [...U]
  ): Promise<CheckGeneric<T, R> | { error: Error }> => {
    let data: CheckGeneric<T, R>;

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
