import { Button, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { FormEl, FormWrap } from './ContactForm.styled';

export const ContactForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const { name, phone } = form.elements;
    for (const contact of contacts) {
      if (contact.name === name.value) {
        return alert(`${contact.name} is already contacts.`);
      }
    }
    dispatch(addContact({ name: name.value, number: phone.value }));
    form.reset();
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <FormWrap>
        <TextField
          type="text"
          name="name"
          variant="filled"
          color="success"
          label="Contact name"
          margin="normal"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          disabled={!isLoggedIn}
          required
        />

        <TextField
          type="tel"
          name="phone"
          variant="filled"
          color="success"
          label="Contact number"
          margin="normal"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          disabled={!isLoggedIn}
          required
        />

        <Button disabled={!isLoggedIn} variant="contained" type="submit">
          Add contact
        </Button>
      </FormWrap>
    </FormEl>
  );
};
