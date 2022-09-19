import { Container } from './container/container';
import { Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './home/home';
import { AppBar } from './appBar';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { PhoneBook } from './Phonebook/phoneBook';
import PrivateRoute from './routes/privateRoute';
import PublicRoute from './routes/publicRoute';
// import { useDispatch } from 'react-redux';
// import operations from 'redux/authOperation';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Phonebook/contacts/custom.css'

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(operations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>....Load page</p>}>
        <Routes>
          <Route path="/goit-react-hw-08-phonebook" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/phonebook" element={<PhoneBook />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
