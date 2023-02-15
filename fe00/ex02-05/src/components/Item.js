import './Item.css'

function TodoItem({todo, onRemove, onToggle}) {
  const {id, text, checked} = todo;


  return (
    <form>
      <button className='check' onClick={() => onToggle(id)}>✔</button>
      <li
        style={{
          textDecoration: checked ? "line-through" : null,
          color: checked ? "#ccc" : "#000",
        }}>
        {text}
        </li>
      <button className='delete' onClick={() => onRemove(id)}>❌</button>
      <p />
    </form>
  );
}

export default TodoItem;