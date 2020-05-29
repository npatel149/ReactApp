import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return the initial state', () => {
        expect(reducers.searchRobots()).toEqual(initialStateSearch)
    })

    it('should return the initial state 2', () => {
        expect(reducers.searchRobots(undefined, { type: ''})).toEqual(initialStateSearch)
    })

    it('should handle CHANGE_SEARCH_FIELD action', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc'})
    })
})

describe('requestRobots', () => {
    const initalStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }

    it('should return the initial state', () => {
        expect(reducers.requestRobots()).toEqual(initalStateRobots)
    })

    it('should return the initial state 2', () => {
        expect(reducers.requestRobots(undefined, { type: ''})).toEqual(initalStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initalStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        const robots = [{
            id: 123,
            name: 'test',
            email: 'test@gmail.com'  
          }]
        expect(reducers.requestRobots(initalStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: robots
        })).toEqual({
            robots: robots,
            isPending: false,
            error: ''
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        const errors = 'Noooooo!!!'
        expect(reducers.requestRobots(initalStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: errors
        })).toEqual({
            robots: [],
            isPending: false,
            error: errors
        })
    })
})