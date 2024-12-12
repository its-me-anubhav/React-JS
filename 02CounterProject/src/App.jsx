import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter= 15;
  const [counter,setCounter] = useState(0)

  const addValue = () => {
  setCounter(counter=>counter+1)   // counter=> counter+1 is used for the more than 1 increment 
  setCounter(counter=>counter+1)   // use counter+1 for 1 increament
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
  }
  const removeValue = () => {
    setCounter(counter-1)   
  }
  return (
    <>
    <h1>Anubhav Shakya</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add Value</button> <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
