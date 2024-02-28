import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/Form/ContactForm';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <div className={css.mainBlock}>
        <div>
          <p className={css.header}>Search</p>
          <Filter />
          <p className={css.header}>Add contact</p>
          <ContactForm />
        </div>
        <div className={css.wrapper}>
          <p className={css.header}>Contacts list</p>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </div>
      </div>
    </>
  );
};

export default Contacts;
