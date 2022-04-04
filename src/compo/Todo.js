import React from "react";
import Todolist from './Todolist'

const Todo = ({todo}) => {
  return (
    <div>
      <ul>
        {todo.map((todos) => (
          <Todolist todo={todos.text}/>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
