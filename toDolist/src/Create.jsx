import React, { useState } from 'react'
import axios from 'axios'

function Create() {

    const [task,setTask]=useState()


   const handleAdd=()=>{
        axios.post('http://localhost:3001/add',{task:task})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
   }
    
  return (
    <div className='create_form'>
      <input type='text' placeholder='Enter task' onChange={(e)=>setTask(e.target.value)}></input>
      <button type='button' onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default Create;
