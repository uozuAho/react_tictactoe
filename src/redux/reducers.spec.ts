import { clickAction } from './actions';
import { handleClick } from './reducers';
import { createInitialState } from "./store";

import * as selectors from './selectors';

describe('reducers', () => {

    let initialState = createInitialState();
    const getWinnerImpl = selectors.getWinner;

    beforeEach(() => {
        initialState = createInitialState();
        (selectors as any).getWinner = jest.fn();
    });

    afterEach(() => {
        // TODO: should be able to use jest.spyOn to restore mocks
        (selectors as any).getWinner = getWinnerImpl;
    });

    it('should have initial state', () => {
        expect(initialState.history.length).toBe(1);
        expect(initialState.stepNumber).toBe(0);
        expect(initialState.xIsNext).toBe(true);
    });

    describe('click', () => {

        it('should do all the things on first click', () => {
            // act: click on square 1
            const nextState = handleClick(initialState, clickAction(1));

            expect(nextState.history.length).toBe(2);
            expect(nextState.history[1].squares[1]).toBe('X');
            expect(nextState.stepNumber).toBe(1);
            expect(nextState.xIsNext).toBe(false);
        });

        it('should keep same state when game is won', () => {
            (selectors as any).getWinner = jest.fn(() => 'X');

            const nextState = handleClick(initialState, clickAction(1));

            expect(nextState).toEqual(initialState);
        });
    });
});
