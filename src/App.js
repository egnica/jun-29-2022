import Form from './Form/Form';
import './App.css';
import { useState } from 'react';
function App() {
  const parentInfo = 'This is from the App.js to be rendered in child element'
  const secondData = 'sending second item through props'
  const [name, changName] = useState('');

  const nameHandler = (value) => {
    console.log(value);
    changName("This is from Form.js to parent App.js: " + value);
  }

  
  return (
    <div className="App">

      <Form  parentChild = {parentInfo} transferValue = {nameHandler} secondData = {secondData} />
      <p>{name}</p>
    </div>
  );
}

export default App;
