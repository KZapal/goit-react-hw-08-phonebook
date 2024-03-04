import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './pages.module.css';

const Register = () => {
  return (
    <>
      <div className={css.content}>
        <h1 className={css.mainP}>Formularz rejestracji</h1>
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
