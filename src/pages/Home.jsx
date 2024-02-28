import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <header></header>
      <main className={css.body}>
        <div className={css.container}>
          <img
            className={css.img}
            src="https://example.com/obrazek.jpg"
            alt="Obrazek powitalny"
          />
          <h1 className={css.h1}>Witaj na stronie powitalnej!</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
