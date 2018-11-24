import { createStore, Store } from 'redux';
import { IAction } from './actions';
import { globalReducer } from './reducers';

export interface IAppState {
    history: ISquaresState[];
    xIsNext: boolean;
    stepNumber: number;
}

interface ISquaresState {
    squares: string[];
}

export function createInitialState(): IAppState {
    return {
        history: [{squares: Array(9).fill(null)}],
        stepNumber: 0,
        xIsNext: true,
    };
}

export function getStore(): Store<IAppState, IAction> {

    const w = window as any;

    if (!_store) {
        _store = createStore(
            globalReducer,
            createInitialState(),
            w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()
        );
    }
    return _store;
}

// tslint:disable-next-line:variable-name
let _store: Store<IAppState, any>;
