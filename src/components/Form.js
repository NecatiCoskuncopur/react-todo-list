import React from 'react'
import { FaPlusSquare } from 'react-icons/fa'

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {

    if (!inputText || /^\s*$/.test(inputText)) {
      alert(' Please enter a todo')
      return false
    }
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.floor(Math.random() * 10000) }]);
    setInputText('')


  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  return (
    <div>
      <form>
        <div className='input-wrapper'>
          <input
            type="text"
            className='todo-input'
            onChange={inputTextHandler}
            value={inputText}
          />
          <button
            type='submit'
            className='todo-button'
            onClick={submitTodoHandler}
          >
            <FaPlusSquare />
          </button>
        </div>
        <div className="select">
          <select onChange={statusHandler} name="todos" className='filter-todo'>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form