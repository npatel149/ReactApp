import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';
import { IRobot } from '../reducers';

let wrapper: any;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
        error: ''
    }
    wrapper = shallow(<MainPage { ...mockProps} />)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'John',
        isPending: false,
        error: ''
    }
    const wrapper2: any = shallow(<MainPage { ...mockProps2} />)
    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
})

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: true,
        error: ''
    }
    const filteredRobots: Array<IRobot> = []
    const wrapper3:any = shallow(<MainPage { ...mockProps3} />)
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})