import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>pozniej@pozniej</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
