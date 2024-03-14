import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';
import { Button, FormControl, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ContactForm = () => {
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
    dispatch(addContact(newContact));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl autoComplete="off" className={css.in}>
        <TextField
          className={css.formInput}
          label="Name"
          name="name"
          placeholder="Name: full name"
        />
        <TextField
          className={css.formInput}
          label="Number"
          type="number"
          name="number"
          placeholder="Phone number: seven digits"
        />
        <Button variant="contained" type="submit" endIcon={<AddIcon />}>
          Add
        </Button>
      </FormControl>
    </form>
  );
};

export default ContactForm;
