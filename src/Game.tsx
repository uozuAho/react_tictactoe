import * as React from 'react';
import { Board } from './Board';

export class Game extends React.Component {
    public render() {
        return (<div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div />
                <ol />
            </div>
        </div>);
    }
}
