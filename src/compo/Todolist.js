import React from 'react'

const Todolist = (todo) => {
  return (
    <div>
        <h1>Component says</h1>
        {todo}
        <button>Complete</button>
        <button>Delete</button>         
    </div>
  )
}

export default Todolist