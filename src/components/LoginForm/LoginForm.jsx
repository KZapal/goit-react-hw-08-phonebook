import { useDispatch } from 'react-redux';
import css from '..//RegisterForm/Form.module.css';
import { login } from '../../redux/auth/operations';
import { Button, FormControl, TextField } from '@mui/material';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const loginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(login(loginData));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl autoComplete="off" className={css.form}>
          <TextField label="Email" name="email" variant="filled" />

          <TextField
            label="Password"
            type="password"
            name="password"
            variant="filled"
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default LoginForm;
