import React from 'react';
import './App.css';
import Imagecomponent from './components/Imagecomponent'
import Skills from './components/Skills'
import Get from './components/Get'

function App({name}) {
  return (
    <div className="App">
      <header>
      <h2> Practice Task Of React</h2>
      </header>
      <h2 className="textLighter">Hello It's <strong> {name} </strong></h2>
      <br/>
      <Imagecomponent src="https://cdn6.f-cdn.com/ppic/142992844/logo/29835323/xez7v/profile_logo_.png" />
      <Skills />
      <Get isOpen={true}/>

    </div>
  );
}

export default App;
