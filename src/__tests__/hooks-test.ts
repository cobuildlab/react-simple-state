import {renderHook, act} from '@testing-library/react-hooks';
import {useEvent, useSubscription} from "../hooks";
import {createEvent} from "../event";

test('useEvent-1', () => {
    const TestEvent = createEvent({initialValue: 1});
    const hook = renderHook(() => useEvent(TestEvent));

    // @ts-ignore
    expect(hook.result.current).toBe(1);

    act(() => {
        TestEvent.dispatch(2);
    });

    // @ts-ignore
    expect(hook.result.current).toBe(2);
});

test('useEvent-2', () => {
    const TestEvent = createEvent({initialValue: 1});

    const hook = renderHook(() => useEvent(TestEvent));
    // @ts-ignore
    expect(hook.result.current).toBe(1);

    act(() => {
        TestEvent.dispatch(2);
    });

    // @ts-ignore
    expect(hook.result.current).toBe(2);

    const hook = renderHook(() => useEvent(TestEvent));

    // @ts-ignore
    expect(hook.result.current).toBe(1);

    act(() => {
        TestEvent.dispatch(2);
    });

    // @ts-ignore
    expect(hook.result.current).toBe(2);
});


test('useSubscription', () => {
    const TestEvent = createEvent({initialValue: 1});
    const hook = renderHook(() => useSubscription(TestEvent, (data) => {
        expect(data).toBe(2);
    }, []));

    act(() => {
        TestEvent.dispatch(2);
    });

    // @ts-ignore
    expect(hook.result.current).toBe(undefined);
});

