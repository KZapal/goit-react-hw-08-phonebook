import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../SharedLayout/SharedLayout.module.css';
import { useAuth } from 'hooks/useAuth';
import { logout } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export default function AccountMenu() {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton variant="contained" size="large" onClick={handleClick}>
        <AccountCircleIcon color="primary" />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          {!isLoggedIn && (
            <Link
              className={`${css.navigate__item} ${
                location.pathname === '/register' ? css.active : ''
              }`}
              to="/register"
            >
              <Button variant="outlined">Register</Button>
            </Link>
          )}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {!isLoggedIn && (
            <Link
              className={`${css.navigate__item} ${
                location.pathname === '/login' ? css.active : ''
              }`}
              to="/login"
            >
              <Button variant="outlined">Login</Button>
            </Link>
          )}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {isLoggedIn && <Button variant="outlined">Profile</Button>}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {isLoggedIn && <Button variant="outlined">Settings</Button>}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {!isLoggedIn ? (
            <></>
          ) : (
            <IconButton variant="outlined" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          )}
        </MenuItem>
      </Menu>
      <IconButton variant="contained" size="large" onClick={handleClick}>
        <SettingsOutlinedIcon color="primary" />
      </IconButton>
    </div>
  );
}
