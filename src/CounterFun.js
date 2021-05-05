import React, { useState,useEffect } from 'react'

function CounterFun() {
    const [count,setCount] = useState(0)
    const [time,setTime] = useState(new Date())
     const handleCounter =() =>{
            setCount(count+1)
            setTime(new Date())
    }
    useEffect(() => {
        console.log("useEffect first timer here.")
      }, [])
    
    return (
        <div>
            <h1>Welcome to Counter Function</h1>
            <button onClick={handleCounter}>{count} </button>
            <p>at {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`} </p>
        </div>
    )
}

export default CounterFun
