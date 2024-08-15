import React, { useState } from 'react';
import MyComponent from './components/myComponent';
import YourComponent from './components/functionalComponent';
import Constructor from './components/constructor';
import MyRender from './components/render';


//functional based component
function App() {
  return (
    <>
    <MyComponent/>
    <YourComponent title='Hello' message='My Sandbox'/>
    <Constructor/>
    <MyRender/>
  
    </>
  )
}

export default App;
