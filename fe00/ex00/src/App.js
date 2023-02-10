import React from 'react'
import './todoListTemplate.css';

function App({form, children}) {
  return (
    <main className="todo-list-template">
      <div classNme="title">
        TODO LIST
      </div>
      <section className="form-wrapper">
        { form }
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default App;
