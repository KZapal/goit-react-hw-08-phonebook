import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
// import { selectError, selectIsLoading } from '../redux/selectors';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from 'pages/Home';

import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <ProtectedRoute Component={<Contacts />} redirectTo="/login" />
          }
        />
        <Route
          path="register"
          element={<PrivateRoute Component={<Register />} redirectTo="/" />}
        />
        <Route
          path="login"
          element={<PrivateRoute Component={<Login />} redirectTo="/" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
