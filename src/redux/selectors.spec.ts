import { getWinner } from './selectors';
import { createInitialState } from "./store";

describe('getWinner', () => {
    it('should return null when there"s no winner', () => {
        const state = createInitialState();
        expect(getWinner(state)).toBe(null);
    });

    it('should return X when X has won', () => {
        const state = createInitialState();
        state.history[0].squares = ['X', 'X', 'X'].concat(Array(6).fill(null));
        expect(getWinner(state)).toBe('X');
    });
});
