import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/authOperation';

import './login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(operations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Mail
        <input
          className="input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Password
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button className="formBtn" type="submit">
        Log in
      </button>
    </form>
  );
};
