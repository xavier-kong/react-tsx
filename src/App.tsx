import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  headerText: string;
  extraText?: string;
}

function App({ headerText, extraText }: AppProps) {
  return (
    <>
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
    </>
  )
};

export default App;
