import React from 'react';
import './App.css';
import MyComp from './components/MyComp';

function App() {
  function onClickHandle() {
    console.log('i am clicked')
  }
  return (
    <div className="App">
      <header className="App-header">
        <MyComp onClick={onClickHandle} str="hi" obj={{name: "caroline"}}></MyComp>
      </header>
    </div>
  );
}

export default App;
