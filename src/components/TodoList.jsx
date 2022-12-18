import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, removeTodo, updateTodo }) {
    return (
        <div className="rounded-md bg-white mt-8">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
            ))}
        </div>
    )
}

export default TodoList