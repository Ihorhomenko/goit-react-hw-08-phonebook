import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/authOperation';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

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

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(operations.login({ email, password }));
    setEmail('');
    setPassword('');
}

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label> 
                Mail
                <input 
                type="email"
                name="email"
                value={email}
                onChange={handleChange}/>
            </label>
            <label>
                Password
                <input 
                type="password"
                name="password"
                value={password}
                onChange={handleChange}/>
            </label>
            <button type="submit">Log in</button>
        </form>
    )
}