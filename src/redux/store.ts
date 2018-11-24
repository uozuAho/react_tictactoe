import { createStore, Store } from 'redux';

export interface IAppState {
    history: ISquaresState[];
    xIsNext: boolean;
    stepNumber: number;
}

interface ISquaresState {
    squares: string[];
}

const initialState: IAppState = {
    history: [],
    stepNumber: 0,
    xIsNext: true,
};

export function getStore(): Store<IAppState, any> {
    if (!_store) {
        _store = createStore(reducer, initialState);
    }
    return _store;
}

function reducer(store: IAppState, action: any): IAppState {
    return store;
}

// tslint:disable-next-line:variable-name
let _store: Store<IAppState, any>;
