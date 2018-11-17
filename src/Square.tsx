import * as React from 'react';

interface ISquareProps {
    value: number;
}

export class Square extends React.Component<ISquareProps> {
    public render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}
