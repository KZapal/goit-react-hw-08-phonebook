import css from '..//RegistrForm/RegisterForm.module.css';

const LoginForm = () => {
  return (
    <>
      <form className={css.form}>
        <label className={css.mainP}>Nazwa użytkownika:</label>
        <input type="text" className={css.formInput} />
        {/* <label className={css.mainP}>Adres email:</label>
        <input type="email" className={css.formInput} /> */}
        <label className={css.mainP}>Hasło:</label>
        <input type="password" className={css.formInput} />
        <button className={css.btn} type="submit">
          Zaloguj się
        </button>
      </form>
    </>
  );
};

export default LoginForm;
