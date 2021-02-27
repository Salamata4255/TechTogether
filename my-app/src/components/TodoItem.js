import React from 'react'
import { Button } from './Button'
import './TodoItem.css'
import MyModal from './MyModal'

function TodoItem({ todo, index, completeTodo, deleteTask }) {
  return (
    <div
      className="todo-item"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.task}
      <div>
        <div className="button-areas">
          {/* <Button onClick={() => completeTodo(index)} text={'Done'} /> */}
          <MyModal
            title="Congratzz"
            content="You've done a MAGNEFICENT task. Here's a REWARD for you"
            trigger="Done"
            handleTrigger={completeTodo}
            index={index}
          />
        </div>
        <div className="button-areas">
          <Button text={'Start'} color={'btn-darkblue'} />
        </div>
      </div>
    </div>
  )
}

export default TodoItem
