// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Event from './Event';

function App() {
  return (
    <div className="App">
      <Event></Event>
    </div>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
