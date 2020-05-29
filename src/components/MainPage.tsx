import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Header from './Header';
import './MainPage.css';
import ErrorBoundry from './ErrorBoundry';
import { IAppProps } from '../containers/App';
import { IRobot } from '../reducers';

class MainPage extends React.Component<IAppProps>  {
    componentDidMount(): void {
        this.props.onRequestRobots();
    }
    
    filterRobots = (): Array<IRobot> => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render(): JSX.Element {
        const { onSearchChange, isPending } = this.props;
        return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    { isPending ? <h1>Loading</h1> :
                    <ErrorBoundry> 
                        <CardList robots={this.filterRobots()}/>
                    </ErrorBoundry>
                    }
                </Scroll>
            </div>
            );
    }
}

export default MainPage;