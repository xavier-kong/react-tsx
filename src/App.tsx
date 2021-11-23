import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputValueContext } from './context/InputValueContext'


function App() {
  const { state, dispatch } = useContext(InputValueContext)
  return (
    <>
      <p>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>SET VALUE TO 100</button>
    </>
  )
};

export default App;
