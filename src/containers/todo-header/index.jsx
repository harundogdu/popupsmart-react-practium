import { useTodo } from 'contexts/todo-context';
import { useState } from 'react';

function TodoHeader() {
  const { addTodo, loading, todos } = useTodo();
  const [activeTodo, setActiveTodo] = useState({
    content: '',
    isCompleted: false
  });

  const handleAddTodoButtonClick = e => {
    e.preventDefault();

    if (activeTodo.content.length < 3) {
      alert('Please make sure todo is at least 3 characters long');
      return;
    }

    if (todos.find(item => item.content === activeTodo.content)) {
      alert('Todo already exists');
      return;
    }

    setActiveTodo({ content: '', isCompleted: false });
    addTodo(activeTodo);
  };

  return (
    <section className='todo-header'>
      <div className='todo-header__card'>
        <div className='todo-header__card-header'>
          <h1>Add Todo</h1>
        </div>
        <div className='todo-header__card-body'>
          <form onSubmit={handleAddTodoButtonClick}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='enter ur todo...'
                required
                min={3}
                value={activeTodo.content}
                onChange={e => setActiveTodo({ content: e.target.value })}
              />
            </div>
            <div className='button-area'>
              <button
                type='submit'
                className='btnAdd'
                onClick={handleAddTodoButtonClick}
                disabled={loading}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TodoHeader;
