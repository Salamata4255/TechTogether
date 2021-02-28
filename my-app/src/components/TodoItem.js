import React from 'react'
import { Button } from './Button'
import './TodoItem.css'
import MyModal from './MyModal'
import dumbcat from '../images/dumbcat.jpg'


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
            title="Congratulations!😃🎉"
            content="You've done a MAGNIFICENT task."
            content2="Here's a REWARD for you - sit back, enjoy your favorite snack and relax!🍰"
            trigger="Done"
            handleTrigger={completeTodo}
            index={index}
            media={dumbcat}
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
