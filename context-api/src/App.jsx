import { useState } from 'react'
import UserContext from './context/UserContext'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {

  return (
    <>
      <UserContextProvider>
        <h1>React wiht chai or code</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
