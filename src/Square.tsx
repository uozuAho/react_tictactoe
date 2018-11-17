import * as React from 'react';

interface ISquareProps {
    value: number;
}

interface ISquareState {
    value: string;
}

export class Square extends React.Component<ISquareProps, ISquareState> {

    constructor(props: ISquareProps) {
        super(props);
        this.state = {
            value: ''
        };
    }

    public render() {
        return (
            <button className="square" onClick={this.onclick}>
                {this.state.value}
            </button>
        );
    }

    private onclick = () => this.setState({value: 'X'});
}
