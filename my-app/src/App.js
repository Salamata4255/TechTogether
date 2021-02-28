import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/TechTogether">
            <Home />
          </Route>
          <Route exact path="/TechTogether/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

/* function App() {
  const holder = [
    { task: 'Learn React', isCompleted: false },
    { task: 'Learn CSS', isCompleted: false },
    { task: 'Read a book', isCompleted: false },
  ]

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
    <div>
      <div className="todo-area">
        <h1 className="todo-title">Todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            index={index}
            completeTodo={completeTodo}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  )
} */

export default App
