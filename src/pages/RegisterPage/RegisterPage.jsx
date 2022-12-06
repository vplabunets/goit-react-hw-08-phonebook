import { useState } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from '../../redux/auth/operations';

import { TextField, Typography, Button } from '@mui/material';
import { RegisterPageForm } from './RegisterPage.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <RegisterPageForm onSubmit={handleSubmit} autoComplete="off">
        <Typography
          className="MuiTypography-h2"
          variant="h3"
          component="h2"
          sx={{
            mb: 1,
          }}
        >
          Sign up page
        </Typography>
        <TextField
          type="text"
          name="name"
          value={name}
          id="filled-basic"
          variant="outlined"
          color="success"
          label="Your name"
          onChange={handleChange}
        />

        <TextField
          type="email"
          name="email"
          value={email}
          id="filled-basic"
          variant="outlined"
          color="success"
          label="Your email"
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          type="password"
          name="password"
          value={password}
          id="filled-basic"
          variant="outlined"
          color="success"
          label="Your password"
          margin="normal"
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 1,
          }}
        >
          Sign up
        </Button>
      </RegisterPageForm>
    </div>
  );
}
