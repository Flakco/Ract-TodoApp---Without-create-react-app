import React, { useState } from 'react';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const todoSubmit = event => {
      event.preventDefault();
      if (value!=""){
       addTodo(value);
      } else {
        //pass
      }
      setValue("");
    }
    return (
    <form className='TodoForm' onSubmit={todoSubmit}>
        <input className='todo-input' type="text" placeholder=' . . .' value={value} onChange={(event) => setValue(event.target.value)}/>
        <button type='submit' className='todo-btn'>New Task</button>
    </form>
  )
}
