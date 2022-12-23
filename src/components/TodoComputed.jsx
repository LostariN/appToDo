import React from 'react'

function TodoComputed({ contadorCompletados, clearCompleted }) {
    return (
        <section className='dark:bg-gray-800 py-4 px-4 flex justify-between text-gray-400 bg-white rounded-b-md transition-all duration-1000'>
            <span>{contadorCompletados} Items Left</span>
            <button onClick={clearCompleted}>Clear Completed</button>
        </section>
    )
}

export default TodoComputed