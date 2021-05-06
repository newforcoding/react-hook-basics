import React from 'react'
import './App.css';
import CounterClass from './CounterClass';
import CounterFun from './CounterFun';
import FunCounterIcon from './FunCounterIcon';

function App() {
  return (
    <div className="App">
      <CounterClass/> 
      <CounterFun/>
      <FunCounterIcon/>
    </div>
  );
}

export default App;
