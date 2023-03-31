import React, {useState} from 'react';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const todoSubmit = (event) => {

        event.preventDefault();

        editTodo(value, task.id);
      };
  return (
    <form onSubmit={todoSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(event) => setValue(event.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>New Task</button>
  </form>
  )
}
