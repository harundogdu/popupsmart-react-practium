import { Navbar, TodoHeader, TodoList } from 'containers';
import React from 'react';

const Todos = () => {
  return (
    <section className='todos'>
      <Navbar />
      <div className='todos__container'>
        <TodoHeader />
        <TodoList />
      </div>
    </section>
  );
};

export default Todos;
