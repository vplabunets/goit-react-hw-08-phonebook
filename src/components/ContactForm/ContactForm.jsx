import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

import {
  FormEl,
  FormWrap,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

export const ContactForm = () => {
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
    console.log({ name: name.value, phone: phone.value });
    dispatch(addContact({ name: name.value, number: phone.value }));
    form.reset();
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <FormWrap>
        <FormLabel>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </FormWrap>
    </FormEl>
  );
};
