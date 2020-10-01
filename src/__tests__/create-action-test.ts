import {createEvent} from "../event";
import {createAction} from "../actions";


test("createAction:", () => {

    const eventSuccess = createEvent({initialValue: true});
    const eventFailure = createEvent({initialValue: new Error()});

    const action = createAction(eventSuccess, eventFailure, (some) => {
        if (some === 2)
            throw new Error("Test");
        return some + 1;
    });

    eventSuccess.subscribe(val => {
        expect(val).toBe(2);
    });

    eventFailure.subscribe(error => {
        if (error !== null)
            expect(error.message).toBe("Test");
    });

    action(1)
    action(2)
});




