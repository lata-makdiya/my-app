import React, { Component } from 'react';
import UpdateComponent from './UpdateComponent';

export default class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            showComponent: true
        }
        console.log('constructor');
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    showComponent = () => {
        this.setState({
            showComponent: !this.state.showComponent
        });
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() { 
        return (
            <>
                {/* <h3>{this.state.count}</h3> */}
                {/* <button onClick={this.increaseCount.bind(this)}>Click</button> */}
                {this.state.showComponent ? <UpdateComponent count={this.state.count} /> : ''}
                {/* <button onClick={() => this.increaseCount()}>Click</button> */}
                <button onClick={() => this.showComponent()}>Click</button>
            </>
        )
    }
}
