import React, {useState} from "react";
import "./App.css";
import Form from "./compo/Form"
import Todo from "./compo/Todo"

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form input={input} setTodo={setTodo} todo={todo} setInput={setInput}/>
      <Todo todo={todo}/>
    </div>
  );
}

export default App;
