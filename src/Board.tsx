import * as React from 'react';
import { Square } from './Square';

interface IBoardProps {
    squares: string[];
    onClick: (i: number) => void;
}

export class Board extends React.Component<IBoardProps> {

    public renderSquare(i: number) {
        return <Square
                    value={this.props.squares[i]}
                    // note: using a lambda here is bad for performance,
                    // but there really doesn't seem to be any other way.
                    // Options:
                    // - extract handler to square component (then how does board know which square was clicked?)
                    // - use redux?
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.props.onClick(i)} />
    }

    public render() {
        return (
            <div>
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
}
