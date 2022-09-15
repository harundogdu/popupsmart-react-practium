import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Todos } from 'pages';
import { ThemeProvider } from 'contexts/theme-context';
import { AuthProvider } from 'contexts/auth-context';
import { TodoProvider } from 'contexts/todo-context';

const user = JSON.parse(localStorage.getItem('username'));

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to='/' replace />;
  }

  return children;
};

const HasUserRoute = ({ user, children }) => {
  if (user) {
    return <Navigate to='/todos' replace />;
  }

  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <AuthProvider>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <HasUserRoute user={user}>
                  <Home />
                </HasUserRoute>
              }
            />
            <Route
              path='/todos'
              element={
                <ProtectedRoute user={user}>
                  <Todos />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </AuthProvider>
  </ThemeProvider>
);
