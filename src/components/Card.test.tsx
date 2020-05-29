import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

const mockProps = {
    name:'test', 
    email: 'test@test.com', 
    id: 123
}

it('expect to render Card component', () => {
    expect(shallow(<Card { ...mockProps }/>).length).toEqual(1)
})

it('expect to render Card component', () => {
    expect(shallow(<Card { ...mockProps }/>)).toMatchSnapshot();
})