import { useSelector } from 'react-redux';

import { getError, getIsLoading } from 'redux/contacts/selectors';

import { ContactList } from '../components/ContactList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';

import { AppWrap, SectionTitle } from '../components/App/App.styled';

export default function ContactsPage() {
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  return (
    <AppWrap>
      <SectionTitle>Contacts</SectionTitle>
      <ContactForm />
      {isLoading && 'Your contacts are loading, please wait for a while'}
      {error && { error }}
      <ContactList />
    </AppWrap>
  );
}
