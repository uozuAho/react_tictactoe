import {createSelector} from 'reselect';
import { IAppState } from './store';

export const getCurrentSquares = (state: IAppState) => state.history[state.stepNumber].squares;

/** Returns winner (X or O), or null if no winner */
export const getWinner = createSelector(getCurrentSquares, squares => calculateWinner(squares));

function calculateWinner(squares: string[]): string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}