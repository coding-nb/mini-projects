import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 15; // This is js variable to access this in jsx use {}
  return (
    <>
      <h1>Counter Application</h1>
      <h2>Counter: {counter}</h2>
      <button>Add Value</button>
      <hr/>
      <button>Remove Value</button>
    </>
  )
}

export default App
