import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { ContactList } from '../components/ContactList/ContactsList';

import { AppWrap, SectionTitle } from '../components/App/App.styled';
// import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';

export default function ContactsPage() {
  // const [isOpenUpdater, setIsOpenUpdater] = useState(false);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  // const handleOpenUpdater = status => setIsOpenUpdater(status);
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
