import css from './pages.module.css';

const Home = () => {
  return (
    <>
      <header></header>
      <main>
        <div className={css.content}>
          <h1 className={css.mainP}>Witaj na stronie powitalnej!</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
