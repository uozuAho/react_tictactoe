import * as React from 'react';
import { Square } from './Square';

interface IBoardState {
    squares: string[];
}

export class Board extends React.Component<{}, IBoardState> {

    constructor(props: {}) {
        super(props);
        this.state = {
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
        const status = 'Next player: X';
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
        squares[i] = 'X';
        this.setState({squares});
    }
}
