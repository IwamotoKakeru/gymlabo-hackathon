import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <Button>
        "Go!!!"
      </Button>
    </div>
  );
}

export default App;
