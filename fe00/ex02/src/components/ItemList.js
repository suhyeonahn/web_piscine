import TodoItem from './Item.js'

function TodoItemList({todos, onRemove}) {
  return (
      <ul>
        {
          todos.map((todo) => (
            <TodoItem
              todo={todo} key={todo.id} onRemove={onRemove}
            />
          ))}
      </ul>
  );
}

export default TodoItemList;

