import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Wrapper } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';
import { ListItem, Button, Typography } from '@mui/material';
export const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  const contactCleaner = () => dispatch(deleteContact(id));

  return (
    <Wrapper>
      <ListItem a>
        <Typography class="MuiTypography-subtitle" variant="string">
          {name}:
        </Typography>
        <Typography variant="string">{number}</Typography>
      </ListItem>
      <Button
        contact={contact.id}
        type="button"
        variant="contained"
        onClick={contactCleaner}
      >
        Delete
      </Button>
    </Wrapper>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
