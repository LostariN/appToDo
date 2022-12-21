import React, { useState } from 'react'

function TodoCreate({ addTodo }) {
    const [title, setTitle] = useState('')

    function handleSubmitAddTodo(e) {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle('')
        }
        addTodo(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmitAddTodo} className="bg-white py-2 rounded-t-md overflow-hidden flex gap-4 items-center px-4 dark:bg-gray-800 transition-all duration-500">
            <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
            <input type="text" placeholder="Create a new todo..." className="w-full outline-none text-gray-400 dark:bg-gray-800 transition-all duration-500"
                onChange={e => setTitle(e.target.value)}
                value={title} />
        </form>
    )
}

export default TodoCreate