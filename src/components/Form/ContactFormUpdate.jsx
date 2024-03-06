import css from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';

const ContactFormUpdate = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();

    const formattedNumber = number.replace(/(\d{3})(?=\d)/g, '$1-');

    const newContact = {
      name: name,
      number: formattedNumber,
      id: nanoid(),
    };
    dispatch(updateContact(newContact));
    // Close modal after submitting the form
    closeModal();
  };

  return (
    <form className={(css.form, css.formUpdate)} onSubmit={handleSubmit}>
      <input
        className={css.formInput}
        type="text"
        name="name"
        placeholder="New name"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <input
        className={css.formInput}
        type="number"
        name="number"
        placeholder="New number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btn} type="submit">
        Update contact
      </button>
      {/* Add close button */}
      <button className={css.btn} onClick={closeModal}>
        Close
      </button>
    </form>
  );
};

export default ContactFormUpdate;
