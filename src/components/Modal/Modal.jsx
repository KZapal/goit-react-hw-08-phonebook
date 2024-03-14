import { Modal } from '@mui/material';
import ContactFormUpdate from 'components/Form/ContactFormUpdate';

export const MyModal = ({ open, onClose, contact }) => {
  return (
    <Modal
      open={open}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClose={onClose}
    >
      <ContactFormUpdate onClose={onClose} contact={contact} />
    </Modal>
  );
};
