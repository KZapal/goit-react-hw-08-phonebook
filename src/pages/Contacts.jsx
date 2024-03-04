import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/Form/ContactForm';
import css from './pages.module.css';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <div className={css.content}>
        <div className={css.mainBlock}>
          <div>
            <p className={css.mainP}>Search</p>
            <Filter />
            <p className={css.mainP}>Add contact</p>
            <ContactForm />
          </div>
          <div className={css.wrapper}>
            <p className={css.mainP}>Contacts list</p>
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
