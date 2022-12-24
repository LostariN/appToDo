import { Draggable, Droppable } from '@hello-pangea/dnd'
import TodoItem from './TodoItem'

function TodoList({ todos, removeTodo, updateTodo }) {
    return (
        <Droppable droppableId='todosDnD'>

            {
                (droppableProvided) => (
                    <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} className="rounded-md bg-white mt-8 overflow-hidden  dark:bg-gray-800 transition-all duration-1000">
                        {todos.map((todo, index) => (
                            <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                {
                                    (draggableProvided) => (
                                        <TodoItem ref={draggableProvided.innerRef} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} {...draggableProvided.dragHandleProps} {...draggableProvided.draggableProps} />
                                    )
                                }
                            </Draggable>
                        ))}
                        {droppableProvided.placeholder}
                    </div>
                )
            }
        </Droppable>
    )
}

export default TodoList