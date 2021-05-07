import React from 'react'
import './App.css';
import CounterClass from './CounterClass';
import CounterFun from './CounterFun';
import HookFetchCard from './HookFetchCard';
import HookFetchPost from './HookFetchPost';
import HookFetchUser from './HookFetchUser';
import FunCounterIcon from './FunCounterIcon';
import FunEffects from './FunEffects';
import FunRefs from './FunRefs';
import HookCallback from './HookCallback';
import HookMemo from './HookMemo';

function App() {
  return (
    <div className="App">
      {/* <CounterClass/> 
      <CounterFun/>
      <FunCounterIcon/>
      <FunEffects/>
      <FunRefs/> */}
      {/* <HookMemo/>
      <HookCallback/> */}
      <HookFetchCard/>
      <HookFetchPost/>
      <HookFetchUser/>
    </div>
  );
}

export default App;
