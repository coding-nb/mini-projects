import './App.css'
import { useState,useCallback, useEffect, useRef } from 'react';

function App() {
  const [length,setLength]= useState(8);
  const [numbAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] =useState("");

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password])
//useRef hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numbAllowed) str+="0123456789"
      if(charAllowed) str += "@#$%^&*"

      for(let i = 1; i < length; i++){
        let char = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char)
      }
      setPassword(pass)
  },[length,numbAllowed,charAllowed,setPassword]);

  useEffect(()=>{
    passwordGenerator()

  },[length,numbAllowed,charAllowed,setPassword]);
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md px-4 py-3 rounded my-8 text-white-500 bg-cyan-200'>
      <h1 className='text-center text-black-500'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' ref={passwordRef} placeholder='Password' readOnly />
          <button onClick ={copyPasswordToClipboard} className='outline-none bg-yellow-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' onChange={(e)=> {setLength(e.target.value)}} min={6} max={100} value={length} className='cursor-pointer'/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numbAllowed} id='numberInput' onChange={()=>{
              setNumAllowed((prev) => !prev)}}/>
            <label>Number</label>
          </div>
            <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charAllowed} id='charInput' onChange={()=>{
              setCharAllowed((prev) => !prev)}}/>
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
