import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/DemoOutput';

function App() {
  const [showP, setShowP] = useState(false);

  console.log('App running');

  const togglePHandler = useCallback(() => {
    setShowP(prev => !prev);
  }, []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {<DemoOutput show={showP}>I'm visible</DemoOutput>}

      <Button onClick={togglePHandler}>Click me</Button>
    </div>
  );
}

export default App;
