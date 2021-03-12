import { renderHook, act } from '@testing-library/react-hooks';
import { createAction } from '../actions';
import { createEvent } from '../event';
import { useCallAction, useFetchAction } from '../hooks';
import { makePromise } from '../utils';

describe('test useFetchAction', () => {
  it('useFetchAction', async () => {
    const user = {
      id: 'test user id',
    };
    const TestEvent = createEvent<{
      user: {
        id: string;
      };
    }>();
    const TestErrorEvent = createEvent<Error>();

    const fetchAction = createAction(TestEvent, TestErrorEvent, async () => {
      return await makePromise({ user }, 500);
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchAction(fetchAction, []),
    );
    expect(result.current[0]).toBe(null);
    expect(result.current[1]).toBe(true);

    await waitForNextUpdate();
    expect(result.current[0]).toStrictEqual({
      user: {
        id: 'test user id',
      },
    });
    expect(result.current[1]).toBe(false);
  });

  it('useFetchAction with onCompleted', async () => {
    const user = {
      id: 'test user id',
    };
    const TestEvent = createEvent<{
      user: {
        id: string;
      };
    }>();
    const onCompletedHandler = jest.fn();
    const TestErrorEvent = createEvent<Error>();

    const fetchAction = createAction(TestEvent, TestErrorEvent, async () => {
      return await makePromise({ user }, 500);
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchAction(fetchAction, [], {
        onCompleted: () => {
          onCompletedHandler();
        },
      }),
    );
    expect(result.current[0]).toBe(null);
    expect(result.current[1]).toBe(true);

    await waitForNextUpdate();
    expect(result.current[0]).toStrictEqual({
      user: {
        id: 'test user id',
      },
    });
    expect(result.current[1]).toBe(false);
    expect(onCompletedHandler).toHaveBeenCalled();
  });
  it('useFetchAction with onError', async () => {
    const user = {
      id: 'test user id',
    };
    const TestEvent = createEvent<{
      user: {
        id: string;
      };
    }>();
    const TestErrorEvent = createEvent<Error>();

    const onErrorHandler = jest.fn();

    const fetchAction = createAction(TestEvent, TestErrorEvent, async () => {
      return await makePromise({ user }, 500, true);
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchAction(fetchAction, [], {
        onError: () => {
          onErrorHandler();
        },
      }),
    );
    expect(result.current[0]).toBe(null);
    expect(result.current[1]).toBe(true);

    await waitForNextUpdate();
    expect(result.current[2].error).toBeTruthy();
    expect(result.current[1]).toBe(false);
    expect(onErrorHandler).toHaveBeenCalled();
  });
});

describe('test useCallAction', () => {
  it('useFetchAction', async () => {
    const user = {
      id: 'test user id',
    };
    const TestEvent = createEvent<{
      user: {
        id: string;
      };
    }>();
    const TestErrorEvent = createEvent<Error>();

    const saveAction = createAction(TestEvent, TestErrorEvent, async () => {
      return await makePromise({ user }, 500);
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useCallAction(saveAction),
    );
    expect(result.current[0]).toBeInstanceOf(Function);
    expect(result.current[1]).toBe(false);

    act(() => {
      result.current[0]();
    });
    await waitForNextUpdate();

    expect(result.current[1]).toBe(false);
    expect(result.current[2].data).toStrictEqual({ user });
  });
});
