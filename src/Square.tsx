import * as React from 'react';

interface ISquareProps {
    value: string;
    onClick: () => void;
}

export class Square extends React.Component<ISquareProps> {

    public render() {
        return (
            // tslint:disable-next-line:jsx-no-lambda
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}
