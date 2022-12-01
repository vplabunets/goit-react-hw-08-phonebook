import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Wrapper, Button } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  const contactCleaner = () => dispatch(deleteContact(id));

  return (
    <Wrapper>
      <span>{name}:</span>
      <span>{number}</span>
      <Button contact={contact.id} type="button" onClick={contactCleaner}>
        Delete
      </Button>
    </Wrapper>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
