import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/Form/ContactForm';
import css from './pages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SearchIcon from '@mui/icons-material/Search';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Helmet>
        <title>hw8 - Contacts list</title>
      </Helmet>
      <div className={css.content}>
        <div className={css.mainBlock}>
          <div>
            <p className={css.mainP}>
              Search <SearchIcon color="primary" />
            </p>

            <Filter />
            <p className={css.mainP}>Add contact</p>
            <ContactForm />
          </div>
          <div className={css.wrapper}>
            <p className={css.mainP}>
              Contacts list <ImportContactsIcon color="primary" />
            </p>
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
