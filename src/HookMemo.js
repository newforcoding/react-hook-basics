import React, { useMemo, useState } from 'react'

function HookMemo() {
    const [length,setLength] = useState()
    const [name,setName] = useState('')
    const [val,setVal] = useState()

    const doSomething = useMemo(()=>{
        let sum = 0
        for(var i=0;i<=length;i++){
            sum+=1
        }
        return sum
    },[length])

    const doneSomething = useMemo(()=>{
        return length*val
    },[length])


    return (
        <div>
            <h1>React useMemo Hook</h1>
            Name : <input type='text' value={name} onChange={e=>setName(e.target.value)} /><br/>
           Length: <input type='text' value={length} onChange={e=>setLength(e.target.value)} />
            <p>Name: {name} </p>
            <p>Sum of Length: {length} is {doSomething} </p>
            <hr/>
            <h1>Value Counting</h1>
            Value : <input type='text' value={val} onChange={e=>setVal(e.target.value)}/><br/>
            Length : <input type='text' value={length} onChange={e=>setLength(Number(e.target.value))}/>
            <p>Our Result is { doneSomething}</p> 
            <hr/>
        </div>
    )
}

export default HookMemo
