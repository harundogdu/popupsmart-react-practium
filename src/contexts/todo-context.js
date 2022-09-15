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
      setLoading(false);
      getTodos();
    }
  };

  const editTodo = async (id, data) => {
    setLoading(true);
    try {
      await TODO_SERVICES.updateTodo(id, data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      getTodos();
    }
  };

  const deleteTodo = async id => {
    setLoading(true);
    try {
      await TODO_SERVICES.deleteTodo(id);
    } catch (error) {
      console.log(error);
    } finally {
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
    deleteTodo,
    editTodo
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
