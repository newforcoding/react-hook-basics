import React, { useState,useCallback } from 'react'

function HookCallback() {
    const [length,setLength] = useState(3)
    const [value,setValue] = useState(4)
    const [updateNo,setUpdateNo] = useState(0)

    const memoCallBack = useCallback(() =>
            doSomething(length,value)
        ,[updateNo])

    const doSomething=(a,b)=>{
        debugger
        const sum=a*b
        return sum
    }

    const changeNoOfTimes= () =>{
        setUpdateNo(updateNo+1)
    }
    return (
        <div>
            <h1>React useCallback Hook</h1>
            value: <input type='text' value={value} onChange={e=>setValue(e.target.value)} /><br/>
            Length: <input type='text' value={length} onChange={e=>setLength(Number(e.target.value))} />
            <p>Result is : {memoCallBack()} </p>
            <p>No. of time result changed:{updateNo}</p>
            <button onClick={changeNoOfTimes}>Change Result</button>
        </div>
    )
}

export default HookCallback
