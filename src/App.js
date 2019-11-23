import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import ScormLogin from './components/ScormLogin'

function App() {
  return (
    <div className="App">
<Greet></Greet>
<Welcome></Welcome>
<ScormLogin></ScormLogin>
    </div>
  );
}

export default App;
