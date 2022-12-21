import Header from './components/Header'
import TodoComputed from './components/TodoComputed'
import TodoCreate from './components/TodoCreate'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import { initialStateTodos } from './initialStateTodos'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(initialStateTodos)
  const [filter, setFilter] = useState('all')

  const addTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  const updateTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
    // const objTodoAntiguo = todos.find(todo => todo.id === objTodo.id)
    // objTodoAntiguo.completed = objTodo.completed
    // setTodos([...todos])
  }
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const contadorCompletados = todos.filter(todo => !todo.completed).length
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  function filterTodos() {
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos;
    }
  }
  function changeFilter(filter) {
    setFilter(filter)
  }
  return (
    <div className="dark:bg-gray-900 bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
    transition-all duration-500">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate addTodo={addTodo} />
        <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />
        <TodoComputed contadorCompletados={contadorCompletados} clearCompleted={clearCompleted} />
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main >

      <footer className='text-center p-4 mt-8 dark:text-gray-400 '> Drag and drop to reorder list</footer>
    </div>
  )
}

export default App