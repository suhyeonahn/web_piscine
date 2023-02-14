import React, {useState, useRef, useEffect} from 'react';
import './TodoListTemplate.css';
import TodoInput from './Input';
import TodoItemList from './ItemList';

function TodoListTemplate() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);
    
    const nextId = useRef(0);

    const handleInput = (text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    };

    const onRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onToggle = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id)
                    todo.checked = !todo.checked;
                return todo;
             })
           );
    }

     return (
            <main className='todo-list-template'>
                <div className='title'>
                    To do list
                </div>
                <section className='input-wrapper'>
                    <TodoInput handleInput={handleInput} />
                </section>
                <section className='items-wrapper'>
                    <TodoItemList
                        todos={todos} onRemove={onRemove} onToggle={onToggle}
                    />
                </section>
            </main>
        );
}

export default TodoListTemplate;