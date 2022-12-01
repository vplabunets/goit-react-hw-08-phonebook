import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import authOperations from '../../redux/auth/operations';

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
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>Добро пожаловать,{user.name} </span>
      <button type="button" onClick={handleLogOut}>
        Выйти
      </button>
    </div>
  );
}
