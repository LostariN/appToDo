import React from 'react'

function TodoComputed({ contadorCompletados, clearCompleted }) {
    return (
        <section className='py-4 px-4 flex justify-between text-gray-400 bg-white rounded-b-md'>
            <span>{contadorCompletados} Items Left</span>
            <button onClick={clearCompleted}>Clear Completed</button>
        </section>
    )
}

export default TodoComputed