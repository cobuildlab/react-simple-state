import { Event } from './event';

/**
 * @param {Event} event - Event to bind the action.
 * @param {Function} action - Action to call.
 * @returns {Function} -  Function with the binded event.
 */
export function createAction<T, V, U extends []>(
  event: Event<T, V>,
  errorEvent: Event<Error>,
  action: (...params: readonly [...U]) => Promise<T | V>,
) {
  return async (
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
}
