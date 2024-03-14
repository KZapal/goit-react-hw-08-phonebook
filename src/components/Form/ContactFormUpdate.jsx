import css from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
// import Draggable from 'react-draggable';
import { Button, FormControl, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const ContactFormUpdate = ({ onClose, contact }) => {
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
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className={css.test}>
      <FormControl autoComplete="off" className={css.in}>
        <TextField
          label="Name"
          name="name"
          placeholder="New name"
          className={css.formInput}
        />
        <TextField
          label="Number"
          type="number"
          name="number"
          placeholder="New number"
          className={css.formInput}
        />
        <Button variant="contained" type="submit">
          Update
        </Button>
        {'  '}
        <Button
          variant="contained"
          startIcon={<CloseIcon />}
          onClick={onClose}
          type="button"
        >
          {' '}
          Close
        </Button>
      </FormControl>
    </form>
  );
};

export default ContactFormUpdate;
