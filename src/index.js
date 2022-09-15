import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Todos } from 'pages';
import { ThemeProvider } from 'contexts/theme-context';
import { AuthProvider } from 'contexts/auth-context';
import { TodoProvider } from 'contexts/todo-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <AuthProvider>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todos' element={<Todos />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </AuthProvider>
  </ThemeProvider>
);
