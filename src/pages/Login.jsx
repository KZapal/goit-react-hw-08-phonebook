import LoginForm from 'components/LoginForm/LoginForm';
import css from './pages.module.css';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>hw8 - Login form</title>
      </Helmet>
      <div className={css.content}>
        <h1 className={css.mainP}>Formularz logowania</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
