import * as React from 'react';
import { connect } from 'react-redux';
import { getCurrentSquares } from './redux/selectors';
import { IAppState } from './redux/store';
import { Square } from './SquareAndContainer';

// presentation

interface IBoardProps {
    squares: string[];
}

export class BoardView extends React.Component<IBoardProps> {

    public renderSquare(i: number) {
        return <Square squareNum={i} />
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

// container

interface IDataProps {
    squares: string[]
}

function mapStateToProps(state: IAppState): IDataProps {
    return {
        squares: getCurrentSquares(state)
    };
}

export const Board = connect(mapStateToProps)(BoardView);
