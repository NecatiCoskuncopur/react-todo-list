import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';


function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }
  return (
    <div className="todo">
      <li
        className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button
        className="complete-btn"
        onClick={completeHandler}
      >
        <FaCheck />
      </button>
      <button
        className="trash-btn"
        onClick={deleteHandler}
      >
        <FaTrash />
      </button>
    </div>
  )
}

export default Todo