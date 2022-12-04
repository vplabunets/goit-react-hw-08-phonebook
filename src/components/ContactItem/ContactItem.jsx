import { React } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Wrapper } from './ContactItem.styled';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { ListItem, Button, Typography } from '@mui/material';
export const ContactItem = ({ contact, updater }) => {
  const { name, number, id } = contact;

  const dispatch = useDispatch();
  const contactCleaner = () => dispatch(deleteContact(id));
  // const contactUpdater = () => dispatch(updateContact(id));
  return (
    <Wrapper>
      <ListItem>
        <Typography className="MuiTypography-subtitle" variant="string">
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
      <Button
        contact={contact}
        type="button"
        variant="contained"
        onClick={updater}
      >
        Update
      </Button>
    </Wrapper>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
