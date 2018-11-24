import { IClickAction } from './actions';
import { IAppState } from './store';

export function handleClick(state: IAppState, click: IClickAction): IAppState {
    // copied from Game.handleClick
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[state.stepNumber];
    const squares = current.squares.slice();
    // if (this.calculateWinner(squares) || squares[i]) {
    //     return;
    // }
    squares[click.squareNum] = state.xIsNext ? 'X' : 'O';
    return {
        history: history.concat([{squares}]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
    };
}
