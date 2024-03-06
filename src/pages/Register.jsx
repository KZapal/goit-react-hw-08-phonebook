import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './pages.module.css';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>hw8 - Register form</title>
      </Helmet>
      <div className={css.content}>
        <h1 className={css.mainP}>Formularz rejestracji</h1>
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
