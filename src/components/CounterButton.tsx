import React, { Component } from 'react';

class CounterButton extends Component<{color: string}, {count:number}> {
    constructor(props: {color: string}) {
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps: {color: string}, nextState:{count:number}) {
        if (this.state.count !== nextState.count) {
            return true
        }
        return false
    }

    updateCount = () => {
        this.setState(state => { 
            return {count: state.count + 1 }   
        })
    }

    render() {
        return (
            <button 
                id='counter'
                color={this.props.color} 
                onClick={this.updateCount}>Count: {this.state.count} 
                </button>
        );
    }
}

export default CounterButton;