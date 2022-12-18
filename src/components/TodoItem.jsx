import React, { useState } from 'react'
import IconCross from './icons/IconCross'
import IconCheck from './icons/IconCheck'

function TodoItem({ todo, removeTodo, updateTodo }) {


    return (
        <article className='flex gap-4 py-4 border-b border-b-gray-400 px-4'>

            <button onClick={() => updateTodo(todo.id)} className={`rounded-full border-2 h-5 w-5 ${todo.completed ? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" : "inline-block"}`}>
                {todo.completed && <IconCheck />}
            </button>
            <p className={`text-gray-600 grow ${todo.completed && "line-through"}`}>{todo.title}</p>
            <button onClick={() => removeTodo(todo.id)} className='flex-none'>
                <IconCross />
            </button>
        </article>
    )
}

export default TodoItem