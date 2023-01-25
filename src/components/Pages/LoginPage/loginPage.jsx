
import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserRequest } from 'redux/auth/UserSlice';
import { selectError, selectLoaderLogin, selectUser } from 'redux/selectors';
import { Error } from '../Error/Error';
import { ContainerInput } from './LoginPage.styled';


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
      {isLoading && <Loader />}
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <ContainerInput>
          <TextField id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
      
      
          <TextField
        id="input-with-icon-textfield"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />
      
        <Button variant="contained" disabled={isLoading} type="submit">
          
          Login
        </Button>
        </ContainerInput>
      </form>
    </div>
  );
}

export default Login;
