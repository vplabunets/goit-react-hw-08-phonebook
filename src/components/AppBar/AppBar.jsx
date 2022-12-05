import { useAuth } from 'hooks/useAuth';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { AppBarHeader } from './AppBar.styled';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarHeader>
  );
}
