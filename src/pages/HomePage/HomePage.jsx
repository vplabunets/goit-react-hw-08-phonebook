import React from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { PageTitle } from 'components/App/App.styled';
import { NavItem } from 'components/AuthNav/AuthNav.styled';
import { HomePageWrapper } from './HomePage.styled';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
  },
};
const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HomePageWrapper>
      {!isLoggedIn ? (
        <>
          <PageTitle>Welcome to Phonebook App</PageTitle>
          <p>
            You can <b>store, manage</b>, your contacts
          </p>
          <p>
            To add your contacts in form below you should
            <NavItem to="/register" style={styles.link}>
              <Button variant="contained">Sing up</Button>
            </NavItem>
            or
            <NavItem to="/login" style={styles.link}>
              <Button variant="contained">Sing in</Button>
            </NavItem>{' '}
          </p>
        </>
      ) : (
        <p>You can add new contact details on Contacts page</p>
      )}
    </HomePageWrapper>
  );
};

export default HomePage;
