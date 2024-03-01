import { Link } from 'react-router-dom';
import css from '../components/RegistrForm/RegisterForm.module.css';

export const NotFoundPage = () => {
  return (
    <div style={{ padding: '10px' }}>
      <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>
        Page doesn't exist
      </h2>
      <button className={css.btn}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Back to main page
        </Link>
      </button>
    </div>
  );
};
