import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';

import BasicMenu from 'components/BasicMenu/BasicMenu';
import AccountMenu from 'components/BasicMenu/AccountMenu';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

export const SharedLayout = () => {
  return (
    <>
      <div>
        <div>
          <div className={css.forever}>
            <header className={css.navigate}>
              <nav className={css.navigate__in}>
                <div>{<BasicMenu />}</div>
                <div>{<AccountMenu />}</div>
              </nav>
            </header>
          </div>
          <Suspense
            fallback={
              <Box sx={{ display: 'flex', width: '100%' }}>
                <CircularProgress />
              </Box>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
      <Link
        to="https://github.com/KZapal/goit-react-hw-08-phonebook"
        target="_blank"
        className={css.github}
      >
        <IconButton variant="contained" size="large">
          <GitHubIcon color="primary" />
        </IconButton>
      </Link>
    </>
  );
};
