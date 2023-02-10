import './TodoListTemplate.css'

function TodoList({form, children}) {
    return (
      <main className="todo-list-template">
          <div className="title">
            Todo List 
          </div>
          <section className="form-wrapper">
            { form }
          </section>
          <hr/>
          <section className="todos-wrapper">
            { children }
          </section>
      </main>
    )
  }

  export default TodoList;