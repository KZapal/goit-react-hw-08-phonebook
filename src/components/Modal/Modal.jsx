import ContactFormUpdate from 'components/Form/ContactFormUpdate';
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, children, close, contact }) =>
  isOpen
    ? ReactDOM.createPortal(
        <ContactFormUpdate close={close} contact={contact}>
          {children}
        </ContactFormUpdate>,
        document.getElementById('portal')
      )
    : null;

export default Modal;
