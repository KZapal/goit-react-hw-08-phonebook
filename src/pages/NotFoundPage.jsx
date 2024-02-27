import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div style={{ padding: '10px' }}>
      <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>
        Page doesn't exist
      </h2>
      <button>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          Back to main page
        </Link>
      </button>
    </div>
  );
};
