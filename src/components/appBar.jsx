import { UserMenu } from './userMenu/userMenu';
import { Navigation } from './navigation/navigation';
import Container from 'react-bootstrap/Container';
import { AuthMenu } from './authMenu/authMenu';
import { useSelector } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';

export const AppBar = () => {
  const isLogedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navigation />
        {isLogedIn ? <AuthMenu /> : <UserMenu />}
      </Container>
    </Navbar>
  );
};
