import React from 'react';
import './App.css';
import { FormGenerator } from './FormGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormGenerator typeString="string" />
        <FormGenerator typeString="number" />
        <FormGenerator typeString="boolean" />
      </header>
    </div>
  );
}

export default App;
