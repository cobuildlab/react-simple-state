import {createEvent} from "../event";


test("createEvent:", () => {

    const event = createEvent();
    expect(event).not.toBeNull();

    const eventWithInitial = createEvent({initialValue: 1});
    expect(eventWithInitial.get()).toBe(1);

    const eventWithReducer = createEvent({reducer: (val: any) => !val});
    eventWithReducer.subscribe(val => {
        expect(val).toBe(false);
    });
    eventWithReducer.dispatch(true);
    expect(eventWithReducer.get()).toBe(true);

    const eventWithReducerAndInitial = createEvent({initialValue: 1, reducer: (val: any) => val + 1});
    eventWithReducerAndInitial.subscribe(val => {
        expect(val).toBe(2);
    });
    eventWithReducerAndInitial.dispatch(1);
    expect(eventWithReducerAndInitial.get()).toBe(2);
});




