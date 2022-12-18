import React from 'react'

function TodoFilter({ changeFilter, filter }) {
    return (
        <section className='container mx-auto mt-8'>
            <div className='bg-white flex justify-center p-4 gap-3 text-gray-500 font-bold rounded-md'>
                <button onClick={() => changeFilter('all')} className={`${filter === "all" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`}>All</button>
                <button onClick={() => changeFilter('active')} className={`${filter === "active" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`}>Active</button>
                <button onClick={() => changeFilter('completed')} className={`${filter === "completed" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`}>Completed</button>
            </div>
        </section>

    )
}

export default TodoFilter