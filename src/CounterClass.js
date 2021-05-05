import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    hanldeCounter=()=>{
        this.setState(prevState=>({count:prevState.count+1}))
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <h1>Welcome to Class Counter </h1>
                <button onClick={this.hanldeCounter}>{count}</button>
            </div>
        )
    }
}
