import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/operations';

import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import { LoginPageForm } from './LoginPage.styled';

export default function LoginView() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          mb: 1,
        }}
      >
        Login page
      </Typography>
      <LoginPageForm type="submit" onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="email"
          name="email"
          variant="outlined"
          label="Your email"
          color="success"
        />
        <TextField
          type="password"
          name="password"
          variant="outlined"
          color="success"
          label="Your password"
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 1,
          }}
        >
          Sign in
        </Button>
      </LoginPageForm>
    </div>
  );
}
