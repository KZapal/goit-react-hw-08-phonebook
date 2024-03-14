import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../SharedLayout/SharedLayout.module.css';
import { useAuth } from 'hooks/useAuth';
import { logout } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function BasicMenu() {
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
      <IconButton variant="contained" onClick={handleClick} size="large">
        <MenuOutlinedIcon color="primary" />
      </IconButton>
      <Link
        className={`${css.navigate__item} ${
          location.pathname === '/' ? css.active : ''
        }`}
        to="/"
      >
        <Button variant="outlined" startIcon={<HomeIcon />}>
          Home
        </Button>
      </Link>

      <Link className={`${css.navigate__item} `} to="/contacts">
        <Button variant="outlined" startIcon={<ContactsIcon />}>
          Contacts
        </Button>
      </Link>

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
          <Link className={`${css.navigate__item} `} to="/">
            <Button variant="outlined">Home</Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}></MenuItem>
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
    </div>
  );
}
