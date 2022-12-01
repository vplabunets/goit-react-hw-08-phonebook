import { Layout } from 'components/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import ContactsView from 'components/views/ContactsView';
import HomeView from 'components/views/HomeView';
import LoginView from 'components/views/LoginView';
import RegisterView from 'components/views/RegisterView';
import { useAuth } from 'hooks/useAuth';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, Route, Routes } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';

import { getContacts, getError, getIsLoading } from 'redux/contacts/selectors';
import authOperations from '../../redux/auth/operations';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';

import { AppWrap, PageTitle, SectionTitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterView} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginView} redirectTo="/contacts" />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsView} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};

/* <AppWrap>
        <PageTitle>Phonebook</PageTitle>
        <ContactForm></ContactForm>
        <SectionTitle>Contacts</SectionTitle>
        <Filter />
        {isLoading && 'Your contacts are loading, please wait foe a while'}
        {error && { error }}
        {getContacts.length > 0 && <ContactList />}
      </AppWrap> */
