import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import authOperations from '../../redux/auth/operations';
import Button from '@mui/material/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(authOperations.logOut());

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {user.email} </span>
      <Button type="button" variant="contained" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
}
