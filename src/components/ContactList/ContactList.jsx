import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import { selectFilteredContacts } from '../../redux/filter/selectors';
import { Box, Grid, List, ListItem } from '@mui/material';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Box>
      <List>
        <Grid container spacing={2}>
          {filteredContacts.map(contact => (
            <Grid item xs={6} container key={contact.id}>
              <ListItem className={css.listItem}>
                <ContactListItem contact={contact} />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
    </Box>
  );
};

export default ContactList;
