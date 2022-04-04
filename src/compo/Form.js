import React, {useState} from "react";

const Form = ({input, todo, setTodo, setInput}) => {
    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    const todoHandler = (e)=>{
        e.preventDefault();
        console.log('me is called')
        setTodo([
          ...todo,
          { text: input, completed: false, id: Math.random()*1000}
        ]);
        console.log(todo)

        setInput("")
    };
  return (
    <div>
      <form>
        <input type="text" onChange={inputHandler}/>
        <button type="submit" onClick={todoHandler}>Submit</button>
        <div>
          <select>
            <option>All</option>
            <option>Completed</option>
            <option>uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
