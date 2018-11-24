import { createStore, Store } from 'redux';

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

export function getStore(): Store<IAppState, any> {

    const w = window as any;

    if (!_store) {
        _store = createStore(
            reducer,
            createInitialState(),
            w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()
        );
    }
    return _store;
}

function reducer(store: IAppState, action: any): IAppState {
    return store;
}

// tslint:disable-next-line:variable-name
let _store: Store<IAppState, any>;
