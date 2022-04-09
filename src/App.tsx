import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rockets from './components/rockets/rockets';
import Ships from './components/ships/ships';


function App() {

  return (
    <>
    <span className='body'>
      <h1 className='App-header'>SpaceX</h1>
      <Rockets></Rockets>
      <Ships></Ships>
    </span >
    </>
  );
}

export default App;
