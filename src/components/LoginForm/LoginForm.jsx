import { useDispatch } from 'react-redux';
import css from '..//RegisterForm/RegisterForm.module.css';
import { login } from '../../redux/auth/operations';

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
      <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <label className={css.mainP}>Email użytkownika:</label>
        <input type="text" name="email" className={css.formInput} />
        <label className={css.mainP}>Hasło:</label>
        <input type="password" name="password" className={css.formInput} />
        <button className={css.btn} type="submit">
          Zaloguj się
        </button>
      </form>
    </>
  );
};

export default LoginForm;