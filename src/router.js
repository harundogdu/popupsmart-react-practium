import { useAuth } from 'contexts/auth-context';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home, Todos } from 'pages';

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  if (!auth) {
    return <Navigate to='/' replace />;
  }

  return children;
};

const UserRoute = ({ children }) => {
  const { auth } = useAuth();
  if (auth) {
    return <Navigate to='/todos' replace />;
  }

  return children;
};
const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <UserRoute>
            <Home />
          </UserRoute>
        }
      />
      <Route
        path='/todos'
        element={
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        }
      />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
};

export default Router;
