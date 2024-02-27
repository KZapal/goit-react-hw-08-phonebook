import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
// import { selectError, selectIsLoading } from '../redux/selectors';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from 'pages/Home';

import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import Contacts from 'pages/Contacts';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
