import { useState } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15; // This is js variable to access this in jsx use {}

  const [counter,setCounter] = useState(16);
  const addValue = ()=>{
    if(counter + 1 <= 20){
      setCounter(counter+1);
      console.log("Add Val : ",counter);
    }
  }
  const removeValue = ()=>{
    if(counter-1 >= 0){
      setCounter(counter-1);
      console.log("Removed Value", counter);
    }
  }
  return (
    <>
      <h1>Counter Application</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <hr/>
      <button onClick={removeValue}>Remove Value {counter} </button>
    </>
  )
}

export default App
