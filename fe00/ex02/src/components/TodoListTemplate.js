import React, {useState, useRef} from 'react';
import './TodoListTemplate.css';
import TodoInput from './Input';
import TodoItemList from './ItemList';

function TodoListTemplate() {
    const [todos, setTodos] = useState([]);
    
    const nextId = useRef(0);

    const handleInput = (text) => {
        const todo = {
            id: nextId.current,
            text,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    };

    const onRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
     return (
            <main className='todo-list-template'>
                <div className='title'>
                    To do list
                </div>
                <section className='input-wrapper'>
                    <TodoInput handleInput={handleInput} />
                </section>
                <section className='items-wrapper'>
                    <TodoItemList todos={todos} onRemove={onRemove} />
                </section>
            </main>
        );
}

export default TodoListTemplate;