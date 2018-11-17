import * as enzyme from 'enzyme';
import * as React from 'react';
import { Square } from './Square';

it('should show value', () => {
    const onclick = jest.fn();
    const square = enzyme.shallow(<Square value={'2'} onClick={onclick}/>);

    expect(square.find('button').text()).toBe('2');
});

it('should call prop on button click', () => {
    const onclick = jest.fn();
    const square = enzyme.shallow(<Square value={'2'} onClick={onclick}/>);

    square.find('button').simulate('click');

    expect(onclick.mock.calls.length).toBe(1);
});
