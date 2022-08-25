import counterReducer from './counter.reducer';
import * as fromActions from '../actions';

describe("Counter Reducer", () => {
    test("Should increase the counter by one, when triggering INCREMENT action", () => {
        const newState = counterReducer({ counter: 0 }, { type: fromActions.INCREMENT })
        expect(newState.counter).toEqual(1);
    })

    test("Should increase counter by 10, when triggering ADD_COUNTER action", () => {
        const newState = counterReducer({ counter: 0 }, { type: fromActions.ADD_COUNTER, value: 10 })
        expect(newState.counter).toEqual(10);
    })
})