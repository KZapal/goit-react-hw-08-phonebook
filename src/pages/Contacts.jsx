import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/Form/ContactForm';
import css from '../components/App.module.css';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <div className={css.mainBlock}>
        <h2 className={css.header}>Phone Book</h2>
        <ContactForm />
        <h2 className={css.header}>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </>
  );
};

export default Contacts;
