import React, { useState } from 'react';
import MyComponent from './components/myComponent';
import YourComponent from './components/functionalComponent';

//functional based component
function App() {
  return (
    <>
    <MyComponent/>
    <YourComponent title='Hello' message='My Sandbox'/>
    </>
  )
}

export default App;
