import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ClickAction } from './redux/actions';
import { getCurrentSquares } from './redux/selectors';
import { IAppState } from './redux/store';

// presentation

interface ISquareProps {
    value: string;
    squareNum: number;
    onClick: () => void;
}

export function SquareView(props: ISquareProps) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

// container

interface IDataProps {
    value: string;
    squareNum: number;
}

interface IDispatchProps {
    onClick: () => void;
}

function mapStateToProps(state: IAppState, ownProps: {squareNum: number}): IDataProps {
    return {
        squareNum: ownProps.squareNum,
        value: getCurrentSquares(state)[ownProps.squareNum],
    }
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: IDataProps): IDispatchProps {
    return {
        onClick: () => dispatch(new ClickAction(ownProps.squareNum))
    };
}

export const Square = connect(mapStateToProps, mapDispatchToProps)(SquareView);
