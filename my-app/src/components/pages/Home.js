import React, { useState } from 'react'
import TodoItem from '../TodoItem'
import './Home.css'
import Navbar from '../Navbar'
import NewTask from '../NewTask'
import ReactAudioPlayer from 'react-audio-player'
/* import Breakfast_Alone from '../../images/Breakfast_Alone.mp3' */
import Feel_Special from '../../images/twice-feel-special-lofi-cover.ogg'

function Home() {
  const holder = [
    { task: 'Learn React', isCompleted: false },
    { task: 'Learn CSS', isCompleted: false },
    { task: 'Read a book', isCompleted: false },
  ]

  const addTodos = value => {
    setTodos(
      todos.concat({
        task: value,
        isCompleted: false,
      })
    )
  }

  const [todos, setTodos] = useState(holder)

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !todos[index].isCompleted
    setTodos(newTodos)
  }

  const deleteTask = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <main id="Home">
      <Navbar />
      <div className="todo-area">
        <h1 className="todo-title">To-do list</h1>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            index={index}
            completeTodo={completeTodo}
            deleteTask={deleteTask}
          />
        ))}

        <NewTask addTodos={addTodos} />
      </div>
      <div className="timer-area">
        <h1>Timer</h1>
      </div>
      <div className="music-area">
        <h1>Music</h1>
        <ReactAudioPlayer src={Feel_Special} autoPlay controls />
      </div>
    </main>
  )
}

export default Home
