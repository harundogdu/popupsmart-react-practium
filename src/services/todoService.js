import axios from 'axios';
import { API_URL } from 'constants';

const SERVICE = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export const TODO_SERVICES = {
  getTodos: () => SERVICE.get('/'),
  getTodo: id => SERVICE.get(`/${id}`),
  createTodo: data => SERVICE.post('/', data),
  updateTodo: (id, data) => SERVICE.put(`/${id}`, data),
  deleteTodo: id => SERVICE.delete(`/${id}`)
};
