import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Todos } from 'pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/todos' element={<Todos />} />
    </Routes>
  </BrowserRouter>
);
