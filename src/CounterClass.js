import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            time:new Date()
        }
    }
    hanldeCounter=()=>{
        this.setState(prevState=>({count:prevState.count+1}))
        // this.setState(new Date())
    }
    render() {
        const {count} = this.state
        const {time} = this.state
        return (
            <div>
                <h1>Welcome to Class Counter </h1>
                <button onClick={this.hanldeCounter}>{count} </button>
                <p>at: {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}</p>
            </div>
        )
    }
}
