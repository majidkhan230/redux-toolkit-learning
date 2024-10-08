import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div>
          <h1 className="text-3xl font-bold underline text-center">
     Learn about Redux Toolkit
    </h1>
    <AddTodo/>
    <Todos/>
    </div>
  )
}

export default App
