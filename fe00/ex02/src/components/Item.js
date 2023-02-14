import './Item.css'

function TodoItem({todo, onRemove}) {
  const {id, text} = todo;

  return (
    <form>
      <li>{text}</li>
      <button className='delete' onClick={() => onRemove(id)}>❌</button>
      <p />
    </form>
  );
}

export default TodoItem;