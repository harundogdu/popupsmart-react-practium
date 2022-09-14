import { useEffect, useState } from 'react';
import { TODO_SERVICES } from 'services/todoService';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await TODO_SERVICES.getTodos();
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.content}</div>
      ))}
    </div>
  );
}

export default TodoList;
