import TodoItem from './Item.js'

function TodoItemList({todos, onRemove, onToggle}) {
  return (
      <ul>
        {
          todos.map((todo) => (
            <TodoItem
              todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}
            />
          ))}
      </ul>
  );
}

export default TodoItemList;

