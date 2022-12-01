import { useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
import { getContacts, getError, getIsLoading } from 'redux/contacts/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';

import { AppWrap, PageTitle, SectionTitle } from '../App/App.styled';

export default function ContactsView() {
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  return (
    <AppWrap>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm></ContactForm>
      <SectionTitle>Contacts</SectionTitle>
      <Filter />
      {isLoading && 'Your contacts are loading, please wait foe a while'}
      {error && { error }}
      {getContacts.length > 0 && <ContactList />}
    </AppWrap>
  );
}
