import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import operations from 'redux/authOperation';
import './authMenu.css';

export const AuthMenu = () => {
  const userMail = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="authMail">{`Welcome, ${userMail}`}</h3>
      <button
        className="authBtn"
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        LogOut
      </button>
    </div>
  );
};
