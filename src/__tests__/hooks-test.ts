import { renderHook, act } from '@testing-library/react-hooks';
import { useEvent, useSubscription } from '../hooks';
import { createEvent } from '../event';

test('useEvent', () => {
  const TestEvent = createEvent({ initialValue: 1 });
  const hook = renderHook(() => useEvent(TestEvent));

  expect(hook.result.current).toBe(1);

  act(() => {
    TestEvent.dispatch(2);
  });

  expect(hook.result.current).toBe(2);
});

test('useEvent with Reducer', () => {
  const TestEvent = createEvent({ initialValue: 1 });
  const hook = renderHook(() =>
    useEvent(TestEvent, {
      reducer: (value) => {
        return `${value}`;
      },
    }),
  );

  expect(hook.result.current).toStrictEqual('1');

  act(() => {
    TestEvent.dispatch(2);
  });

  expect(hook.result.current).toStrictEqual('2');
});

test('useSubscription', () => {
  const TestEvent = createEvent({ initialValue: 1 });
  const hook = renderHook(() =>
    useSubscription(
      TestEvent,
      (data) => {
        expect(data).toBe(2);
      },
      [],
    ),
  );

  act(() => {
    TestEvent.dispatch(2);
  });

  expect(hook.result.current).toBe(undefined);
});
