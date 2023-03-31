import React from 'react';
import Edit  from '../../public/Edit.png';
import Trash  from '../../public/Trash.png';

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className='todo'>
      <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <img src={Edit} className="img" onClick={() => editTodo(task.id)} />
        <img src={Trash}className="img2" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}
