import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from 'router';
import { AuthContext, ThemeContext, TodoContext } from 'contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContext>
    <AuthContext>
      <TodoContext>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TodoContext>
    </AuthContext>
  </ThemeContext>
);
