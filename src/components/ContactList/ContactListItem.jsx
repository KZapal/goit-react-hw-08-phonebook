import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import Modal from 'components/Modal/Modal';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={css.itemIn}>
        <span>
          {contact.name}: {contact.number}
        </span>
        <div>
          <button onClick={handleOpenModal} className={css.btn}>
            Update
          </button>{' '}
          <button onClick={handleDelete} className={css.btn}>
            Delete
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} close={handleCloseModal} contact={contact}></Modal>
    </>
  );
};

export default ContactListItem;
