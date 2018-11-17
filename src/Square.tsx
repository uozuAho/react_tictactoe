import * as React from 'react';

interface ISquareProps {
    value: string;
    onClick: () => void;
}

export function Square(props: ISquareProps) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}
