import { useState } from 'react'
import './App.css'
import AddTodo from './componentAddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App;