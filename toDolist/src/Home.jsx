import React, { useState } from 'react'
import Create from './create'

function Home() {
    const [todos,setTodos]=useState([])
  return (
    <div>
      <h2>Todo List</h2>
      <Create></Create>
      {
        todos.length===0
        ?
        <div><h2>No records</h2></div>
        :
        todos.map(todo=>(
            <div>
                {todo}
            </div>
        ))
      }
      
    </div>
  )
}

export default Home
