import { CLICK, IAction, IClickAction } from './actions';
import { IAppState } from './store';

export function globalReducer(state: IAppState, action: IAction): IAppState {
    switch (action.type) {
        case CLICK:
            return handleClick(state, action as IClickAction);
        default:
            return state;
    }
}

export function handleClick(state: IAppState, click: IClickAction): IAppState {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[state.stepNumber];
    const squares = current.squares.slice();

    squares[click.squareNum] = state.xIsNext ? 'X' : 'O';

    return {
        history: history.concat([{squares}]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
    };
}
