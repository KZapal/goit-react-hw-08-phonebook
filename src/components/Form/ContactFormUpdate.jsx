import css from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import Draggable from 'react-draggable';

const ContactFormUpdate = ({ close, contact }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const formattedNumber = number.replace(/(\d{3})(?=\d)/g, '$1-');

    const updatedContact = {
      name: name.trim() !== '' ? name : contact.name,
      number: formattedNumber.trim() !== '' ? formattedNumber : contact.number,
    };
    dispatch(updateContact({ contactId: contact.id, updatedContact }));

    form.reset();
    close();
  };

  return (
    <Draggable>
      <form className={(css.form, css.formUpdate)} onSubmit={handleSubmit}>
        <input
          className={css.formInput}
          type="text"
          name="name"
          placeholder="New name"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <input
          className={css.formInput}
          type="number"
          name="number"
          placeholder="New number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <button className={css.btn} type="submit">
          Edit contact
        </button>
        {'  '}
        <button className={css.btn} onClick={close} type="button">
          Close popup
        </button>
      </form>
    </Draggable>
  );
};

export default ContactFormUpdate;
