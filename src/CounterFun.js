import React, { useState } from 'react'

function CounterFun() {
    const [count,setCount] = useState(0)
     const handleCounter =() =>{
            setCount(count+1)
    }
    return (
        <div>
            <h1>Welcome to Counter Function</h1>
            <button onClick={handleCounter}>{count}</button> 
        </div>
    )
}

export default CounterFun
