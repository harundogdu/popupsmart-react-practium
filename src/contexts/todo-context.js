import { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';
import { TODO_SERVICES } from 'services/todoService';

const initialState = {
  todos: [],
  addTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  completeTodo: () => {},
  uncompleteTodo: () => {}
};

const TodoContext = createContext(initialState);

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState({ content: '' });
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    try {
      const response = await TODO_SERVICES.getTodos();
      const sortedData = response.data.sort((a, b) => b.id - a.id);
      setTodos(sortedData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async data => {
    setLoading(true);
    try {
      await TODO_SERVICES.createTodo(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTodo({ content: '' });
      setLoading(false);
      getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const value = {
    todos,
    addTodo,
    loading,
    getTodos,
    todo,
    setTodo
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
