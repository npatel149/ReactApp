import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import { IDispatchObj } from './actions';

export interface IRobot {
    name: string;
    id: number;
    email: string;
}

export interface IStateRobots {
    isPending: boolean,
    robots: Array<IRobot>,
    error: string
}
export interface IStateSearch {
    searchField?: string
}

const initalStateSearch: IStateSearch = {
    searchField: ''
}

export const searchRobots = (state = initalStateSearch as IStateSearch, action = {} as IDispatchObj) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}

const initalStateRobots: IStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initalStateRobots as IStateRobots, action = {} as IDispatchObj): IStateRobots => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state
    }
}