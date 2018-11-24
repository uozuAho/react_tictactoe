import * as React from 'react';
import { connect } from 'react-redux';
import { Board } from './BoardAndContainer';
import { getWinner } from './redux/selectors';
import { IAppState } from './redux/store';

interface IGameProps {
    stepNumber: number;
    xIsNext: boolean;
    winner: string | null;
}

export class GameView extends React.Component<IGameProps> {

    public render() {
        let status;
        if (this.props.winner) {
            status = 'Winner: ' + this.props.winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        const moves = Array(this.props.stepNumber).map((val, idx) => {
            const desc = idx ?
              'Go to move #' + idx :
              'Go to game start';
            return (
              <li key={idx}>
                <button
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.jumpTo(idx)}>{desc}</button>
              </li>
            );
        });

        return (<div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>);
    }

    private jumpTo(step: number) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
    }
}

// container

function mapStateToProps(state: IAppState): IGameProps {
    return {
        stepNumber: state.stepNumber,
        winner: getWinner(state),
        xIsNext: state.xIsNext,
    }
}

export const Game = connect(mapStateToProps)(GameView);
