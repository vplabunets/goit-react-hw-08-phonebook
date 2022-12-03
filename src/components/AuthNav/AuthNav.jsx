import React from 'react';
import Button from '@mui/material/Button';
import { NavItem } from './AuthNav.styled';

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

export default function AuthNav() {
  return (
    <div>
      <NavItem to="/register" style={styles.link}>
        <Button variant="contained">Sing up</Button>
      </NavItem>
      <NavItem to="/login" style={styles.link}>
        <Button variant="contained">Sign in</Button>
      </NavItem>
    </div>
  );
}
