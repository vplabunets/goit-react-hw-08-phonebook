import { useDispatch } from 'react-redux';
// import authOperations from '../../redux/auth/operations';
import { updateContact } from 'redux/contacts/operations';

import { Button, TextField, Typography } from '@mui/material';
import { UpdaterForm } from './Updater.styled';

export default function Udpater({
  closeUpdater,
  currentId,
  currentName,
  currentNumber,
}) {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, phone } = form.elements;

    dispatch(
      updateContact({ currentId, name: name.value, number: phone.value })
    );
    closeUpdater();
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h4
          variant="h3"
          component="h2"
          sx={{
            mb: 1,
          }}
        >
          <span style={{ fontSize: 25, color: 'blue' }}>{currentName}</span>,
          you are updating your contact details
        </h4>
        <Button variant="contained" onClick={closeUpdater}>
          Close updater
        </Button>
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
          />
          <TextField
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            variant="outlined"
            label="Your updated phone"
            color="success"
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 1,
            }}
          >
            Update {currentName} Contact
          </Button>
        </UpdaterForm>
      }
    </div>
  );
}
