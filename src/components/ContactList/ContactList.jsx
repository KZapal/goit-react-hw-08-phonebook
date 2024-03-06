import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

import ContactListItem from './ContactListItem';
import { selectFilteredContacts } from '../../redux/filter/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactList}>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <ContactListItem contact={contact} openModal={openModal}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
