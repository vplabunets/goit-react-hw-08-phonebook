import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '@mui/material/Button';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" style={styles.link}>
        <Button type="button" variant="contained">
          Main
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={styles.link}>
          <Button type="button" variant="contained">
            Contacts
          </Button>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
