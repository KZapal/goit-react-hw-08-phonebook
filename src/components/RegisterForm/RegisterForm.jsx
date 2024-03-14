import { useDispatch } from 'react-redux';
import css from './Form.module.css';
import { register } from '../../redux/auth/operations';
import { Button, FormControl, TextField } from '@mui/material';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const registerData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(registerData));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl autoComplete="off" className={css.form}>
          {/* <label className={css.mainP}>Nazwa użytkownika:</label>
        <input type="text" name="name" className={css.formInput} /> */}
          <TextField label="Login" name="login" variant="filled" />
          <TextField label="Email" name="email" variant="filled" />
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="filled"
          />
          {/* <label className={css.mainP}>Adres email:</label>
        <input type="email" name="email" className={css.formInput} />
        <label className={css.mainP}>Hasło:</label>
        <input type="password" name="password" className={css.formInput} />
        <button className={css.btn} type="submit">
          Zarejestruj się
        </button> */}
          <Button variant="contained" type="submit">
            Register
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default RegisterForm;
