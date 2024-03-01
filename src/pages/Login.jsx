import LoginForm from 'components/LoginForm/LoginForm';
import css from './pages.module.css';

const Login = () => {
  return (
    <>
      <div className={css.content}>
        <h1 className={css.mainP}>Zaloguj się</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
