import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent';

export default class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        console.log('constructor');
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }   

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');
    // }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <>
                {/* <h3>{this.state.count}</h3> */}
                {/* <button onClick={this.increaseCount.bind(this)}>Click</button> */}
                <UpdateComponent count={this.state.count}/>
                <button onClick={() => this.increaseCount()}>Click</button>
            </>
        )
    }
}
