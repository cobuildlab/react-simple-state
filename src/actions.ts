import { Event } from './event';

/**
 * @param {Event} event - Event to bind the action.
 * @param {Function} action - Action to call.
 * @returns {Function} -  Function with the binded event.
 */
export function createAction<T, U extends any[]>(
  event: Event<T>,
  action: (...params: readonly [...U]) => Promise<T>,
) {
  return async (...params: readonly [...U]) => {
    let data: T;

    try {
      data = await action(...params);
    } catch (error) {
      event.dispatchError(error);
      return { error };
    }

    event.dispatch(data);
    return data;
  };
}
