import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const SharedLayout = () => {
  const location = useLocation();
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <div>
        <header className={css.navigate}>
          <nav className={css.navigate__in}>
            <div>
              <Link
                className={`${css.navigate__item} ${
                  location.pathname === '/' ? css.active : ''
                }`}
                npm
                s
                to="/"
              >
                Home
              </Link>
              {isLoggedIn && (
                <Link
                  className={`${css.navigate__item} ${
                    location.pathname === '/contacts' ? css.active : ''
                  }`}
                  to="/contacts"
                >
                  Contacts
                </Link>
              )}
            </div>
            <div>
              {!isLoggedIn ? (
                <>
                  <Link
                    className={`${css.navigate__item} ${
                      location.pathname === '/register' ? css.active : ''
                    }`}
                    to="/register"
                  >
                    Register
                  </Link>
                  <Link
                    className={`${css.navigate__item} ${
                      location.pathname === '/login' ? css.active : ''
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <UserMenu />
              )}
            </div>
          </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
      <div>
        <footer className={css.footer}>
          <div className={css.wrapper}>
            <p>Kamil</p>
            <Link className={css.footerP}></Link>
          </div>
        </footer>
      </div>
    </>
  );
};
