import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import { Button } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>hw8 - not found page</title>
      </Helmet>
      <div style={{ padding: '10px' }}>
        <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>
          Page doesn't exist
        </h2>
        <Button variant="complained">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Back to main page
          </Link>
        </Button>
      </div>
    </>
  );
};
