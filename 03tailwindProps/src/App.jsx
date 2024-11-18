import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Anubhav",
    age:20
  }
  let newAray=[1,2,3,4,5,6,7,8,9]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Anubhav Shakya" ttltxt="click me" /> <br />
      <Card username="Raj Shakya" />
    </>
  )
}

export default App
