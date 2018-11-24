import { clickAction } from './actions';
import { handleClick } from './reducers';
import { createInitialState } from "./store";

describe('reducers', () => {

    let initialState = createInitialState();

    beforeEach(() => {
        initialState = createInitialState();
    });

    it('should have initial state', () => {
        expect(initialState.history.length).toBe(1);
        expect(initialState.stepNumber).toBe(0);
        expect(initialState.xIsNext).toBe(true);
    });

    describe('first click', () => {

        it('should do all the things', () => {
            // act: click on square 1
            const nextState = handleClick(initialState, clickAction(1));

            expect(nextState.history.length).toBe(2);
            expect(nextState.history[1].squares[1]).toBe('X');
            expect(nextState.stepNumber).toBe(1);
            expect(nextState.xIsNext).toBe(false);
        });
    });
})