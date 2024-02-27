import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/operations';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.itemIn}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={handleDelete} className={css.btn}>
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;
