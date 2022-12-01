import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { NavLink } from 'react-router-dom';

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
        Главная
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={styles.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
