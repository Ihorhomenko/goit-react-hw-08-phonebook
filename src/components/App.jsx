import { Container } from './container/container';
import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './home/home';
import { AppBar } from './appBar';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { PhoneBook } from './Phonebook/phoneBook';
import PrivateRoute from './routes/privateRoute';
import PublicRoute from './routes/publicRoute';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/authOperation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h3>Loading ...</h3>
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};
