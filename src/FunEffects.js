import React, { useEffect, useRef, useState } from 'react'

function useDidMount() {
    const didMountRef = useRef(true)
    useEffect(()=>{
        didMountRef.current = false 
    },[])
    return didMountRef.current
}

function FunEffects() {
    const didMount = useDidMount()
    const [state,setState] = useState(0)
    const update = () => {
        setState(prev=> ++prev)
    }
    useEffect(()=>{
         if(didMount){
             console.log('mounted')
         }else{
             console.log('State updated')
         }
    },[state,didMount])
    return (
        <div>
            <h1>How to make ComponentDidMount with Hook</h1>
            <button onClick={update}>Update</button>
        </div>
    )
}

export default FunEffects
