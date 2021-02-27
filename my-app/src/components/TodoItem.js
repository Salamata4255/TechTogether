import React from 'react'
import { Button } from './Button'
import './TodoItem.css'

function TodoItem({ todo, index, completeTodo, deleteTask }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.task}
      <div>
        <Button onClick={() => completeTodo(index)} text={'Done'} />
        <Button text={'Start'} color={'btn-darkblue'} />
      </div>
    </div>
  )
}

export default TodoItem
