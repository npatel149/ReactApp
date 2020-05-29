import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';
import './App.css';
import { IStateSearch, IStateRobots, IRobot } from '../reducers';


export interface IAppProps {
    searchField: string,
    robots: Array<IRobot>,
    isPending: boolean
    error: string,
    onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void,
    onRequestRobots(): Array<IRobot>
}

interface IState {
    searchRobots: IStateSearch,
    requestRobots: IStateRobots
}

const mapStateToProps = (state: IState): object => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>)=> {
    return {
        onSearchChange: (event: { target: { value: string; }; }) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component{
    render(): JSX.Element {
        return <MainPage { ...this.props as IAppProps}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);