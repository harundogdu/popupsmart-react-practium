import { CommonModal, LoadingSpinner } from 'components';
import { useTodo } from 'contexts/todo-context';
import { useState } from 'react';

function TodoList() {
  const { todos, loading, deleteTodo, editTodo } = useTodo();
  const [activeTodo, setActiveTodo] = useState(null);
  const [modal, setModal] = useState(false);

  const handleEditButtonClick = id => {
    const todo = todos.find(todo => todo.id === id);
    setActiveTodo(todo);
    setModal(true);
  };

  const handleUpdateButtonClick = e => {
    e.preventDefault();
    if (todos.find(item => item.content === activeTodo.content)) {
      alert('Todo already exists');
      return;
    }

    if (activeTodo.content.length < 3) {
      alert('Please make sure todo is at least 3 characters long');
      return;
    }

    editTodo(activeTodo.id, activeTodo);
    setModal(false);
  };

  const handleTodoCompleteClick = id => {
    const todo = todos.find(todo => todo.id === id);
    todo.isCompleted = !todo.isCompleted;
    editTodo(todo.id, todo);
  };

  return (
    <div className='todo-list-container'>
      {loading ? (
        <LoadingSpinner text='Loading...' />
      ) : (
        <div className='todo-list'>
          {todos.map((todo, index) => (
            <div className='todo-item' key={index}>
              <div className='todo-item__content'>
                <p
                  className={`${
                    todo.isCompleted ? 'text-completed' : 'text-uncompleted'
                  } todo-item__content__text`}
                  onClick={() => handleTodoCompleteClick(todo.id)}
                >
                  {todo.content}
                </p>
                <div className='todo-item__content__actions'>
                  <button
                    className='btnEdit'
                    onClick={() => handleEditButtonClick(todo.id)}
                  >
                    Edit
                  </button>
                  <button
                    className='btnDelete'
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {modal && (
        <CommonModal
          title='Edit Todo'
          setVisible={setModal}
          onClick={handleUpdateButtonClick}
          buttonText='Update'
        >
          <form className='modal__form' onSubmit={handleUpdateButtonClick}>
            <div className='modal__form-group'>
              <label htmlFor='todo' className='modal__form-group-label'>
                Todo
              </label>
              <input
                type='text'
                name='todo'
                id='todo'
                className='modal__form-group-input'
                value={activeTodo.content}
                onChange={e =>
                  setActiveTodo({ ...activeTodo, content: e.target.value })
                }
              />
            </div>
          </form>
        </CommonModal>
      )}
    </div>
  );
}

export default TodoList;
