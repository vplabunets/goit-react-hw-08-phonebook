import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/selectors';

import { TextField } from '@mui/material';
import { FormLabel } from '../Filter/Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = evt => {
    dispatch(filterContacts(evt.target.value.trim()));
  };

  return (
    <FormLabel>
      <TextField
        value={filter}
        type="text"
        name="filter"
        variant="filled"
        color="success"
        label="Find contacts by name"
        margin="normal"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={changeFilter}
      />
    </FormLabel>
  );
};
