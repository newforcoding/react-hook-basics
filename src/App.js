import React from 'react'
import './App.css';
import CounterClass from './CounterClass';
import CounterFun from './CounterFun';
import FunCounterIcon from './FunCounterIcon';
import FunEffects from './FunEffects';
import FunRefs from './FunRefs';
import HookMemo from './HookMemo';

function App() {
  return (
    <div className="App">
      {/* <CounterClass/> 
      <CounterFun/>
      <FunCounterIcon/>
      <FunEffects/>
      <FunRefs/> */}
      <HookMemo/>
    </div>
  );
}

export default App;
