import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <p className={css.name}>{user.name}</p>
      <button className={css.btn} onClick={handleLogout}>
        <b>Logout</b>
      </button>
    </div>
  );
};

export default UserMenu;
