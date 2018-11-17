import * as React from 'react';
import { Board } from './Board';

interface ISquaresState {
    squares: string[];
}

interface IGameState {
    history: ISquaresState[];
    xIsNext: boolean;
}

export class Game extends React.Component<{}, IGameState> {

    constructor(props: any) {
        super(props);
        this.state = {
          history: [{
            squares: Array(9).fill(null),
          }],
          xIsNext: true,
        };
    }

    public render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = this.calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (<div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={i => this.handleClick(i)} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol />
            </div>
        </div>);
    }

    private calculateWinner(squares: string[]): string | null {
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

    private handleClick(i: number) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([{squares}]),
          xIsNext: !this.state.xIsNext,
        });
    }
}
