import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateContact } from 'redux/contacts/operations';

import { Button, TextField } from '@mui/material';
import { UpdaterForm, Wrapper } from './Updater.styled';

export default function Udpater({
  closeUpdater,
  currentId,
  currentName,
  currentNumber,
}) {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(currentName);
  const [newNumber, setNewNumber] = useState(currentNumber);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateContact({ id: currentId, name: newName, number: newNumber })
    );
    closeUpdater();
  };

  return (
    <Wrapper>
      <div style={{ display: 'flex', margin: '0 auto' }}>
        <h4
          variant="h3"
          component="h2"
          sx={{
            mb: 1,
          }}
        >
          You are updating{' '}
          <span style={{ fontSize: 25, color: 'blue' }}>{currentName}</span>{' '}
          contact details
        </h4>
      </div>
      {
        <UpdaterForm type="submit" onSubmit={handleSubmit} autoComplete="off">
          <TextField
            type="name"
            name="name"
            variant="outlined"
            color="success"
            label="Your updated name"
            margin="normal"
            value={newName}
            onChange={e => setNewName(e.currentTarget.value)}
          />
          <TextField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            variant="outlined"
            label="Your updated phone"
            color="success"
            value={newNumber}
            onChange={e => setNewNumber(e.currentTarget.value)}
          />
          <div style={{ display: 'flex' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                mr: 1,
              }}
            >
              Update {currentName} Contact
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 1,
              }}
              onClick={closeUpdater}
            >
              Close updater
            </Button>
          </div>
        </UpdaterForm>
      }
    </Wrapper>
  );
}
