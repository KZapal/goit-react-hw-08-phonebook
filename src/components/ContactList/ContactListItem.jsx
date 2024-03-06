import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contacts/operations';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className={css.itemIn}>
        <span>
          {contact.name}: {contact.number}
        </span>
        <div>
          <button className={css.btn}>Update</button>{' '}
          <button onClick={handleDelete} className={css.btn}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactListItem;
