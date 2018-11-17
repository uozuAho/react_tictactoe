import * as React from 'react';
import { Square } from './Square';

interface IBoardState {
    isXnext: boolean;
    squares: string[];
}

export class Board extends React.Component<{}, IBoardState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            isXnext: true,
            squares: Array(9).fill(null),
        };
    }

    public renderSquare(i: number) {
        return <Square
                    value={this.state.squares[i]}
                    // note: using a lambda here is bad for performance,
                    // but there really doesn't seem to be any other way.
                    // Options:
                    // - extract handler to square component (then how does board know which square was clicked?)
                    // - use redux?
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.handleClick(i)} />;
    }

    public render() {
        const winner = this.calculateWinner(this.state.squares);
        let status: string;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.isXnext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    private handleClick(i: number) {
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.isXnext ? 'X' : 'O';
        this.setState({
            isXnext: !this.state.isXnext,
            squares
        });
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
}
