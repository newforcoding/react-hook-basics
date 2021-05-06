import React, { useState } from 'react'

function FunCounterIcon() {
    const[num,setNum] = useState(0)
    const increment = () =>{
        setNum((preNum)=>preNum+1)
    }

    const decrement = () =>{
        setNum((preNum)=>preNum-1)
    }
    
    return (
        <div className='h-screen w-screen flex justify-around items-center text-6xl'>
            <h1>Increment and Decrement with icons</h1>
            <div>
                <button className='p-8 bg-grey-500 rounded-lg hover:bg-grey-600' onClick={decrement}>
                  <span className='text-2xl material-icons'>-</span>  
                </button>
            </div>
            <div>
                <h1>{num}</h1>
            </div> 
            <div>
                <button className='p-8 bg-grey-500 rounded-lg hover:bg-grey-600' onClick={increment}>
                <span className='text-2xl material-icons'>+</span>  
                </button>
            </div>       
        </div>
    )
}

export default FunCounterIcon
