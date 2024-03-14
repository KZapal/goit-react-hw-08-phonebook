import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contacts/operations';
// import ServerModal from 'components/Modal/Modal';
// import { IconButton } from '@mui/material';
import { Button, Grid } from '@mui/material';
// import { DeleteIcon } from '@mui/icons-material';
// import { Button, SvgIcon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { MyModal } from 'components/Modal/Modal';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={6}
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
            <PersonIcon color="primary" />
            {contact.name}
          </Grid>
          <Grid item xs={6}>
            {contact.number}
          </Grid>
        </Grid>{' '}
        <Grid item xs={6} container>
          <Grid item xs={6}>
            <Button variant="outlined" onClick={handleOpen}>
              <EditIcon />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={handleDelete}>
              <DeleteIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <MyModal
        open={open}
        onClose={handleClose}
        close={handleClose}
        contact={contact}
      ></MyModal>
    </>
  );
};

export default ContactListItem;
