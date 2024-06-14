// src/App.js
import React from 'react';
import FlowBuilder from './components/FlowBuilder';
import SaveButton from './components/saveButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Button">
        <textarea type="textarea">Message</textarea>
        <input type="text" name="Message"></input>
        <h2>Forward Message</h2>
        <button class ="Save" onclik="button">Save / Change</button>
        
        
      </div>
      {/* Other content of your app */}
      
      <FlowBuilder />
    </div>
  );
}

export default App;
