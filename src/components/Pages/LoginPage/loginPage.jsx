import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserRequest } from 'redux/auth/UserSlice';
import { selectError, selectLoaderLogin, selectUser } from 'redux/selectors';
import { Error } from '../Error/Error';

function Login() {
  const navigation = useNavigate();
  const isLoading = useSelector(selectLoaderLogin);
  const userData = useSelector(selectUser);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userData !== null) {
      navigation('/contacts');
    }
  }, [userData, navigation]);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };

    dispatch(loginUserRequest(formData));
  };

  return (
    <div>
      <h1>Login</h1>
      {isLoading && <Loader />}
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
        </label>
        <label>
          Password:
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />
        </label>
        <button disabled={isLoading} type="submit">
          Увійти
        </button>
      </form>
    </div>
  );
}

export default Login;
