import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { registerUserRequest } from 'redux/auth/UserSlice';
import { selectUser } from 'redux/selectors';
import { ContainerInput } from './RegisterPage.styled';

function Register() {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  const userData = useSelector(selectUser);

  const [name, setName] = useState('');
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
      name,
      email,
      password,
    };

    dispatch(registerUserRequest(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ContainerInput>
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-misaligned"
            label="Name"
            onChange={e => setName(e.target.value)}
            value={name}
            type="text"
            required
          />

          <TextField
            helperText="Please enter your e-mail"
            id="demo-helper-text-misaligned"
            label="Name"
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />

          <TextField
            helperText="Please enter your password"
            id="demo-helper-text-misaligned"
            label="Name"
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />

          <Button variant="contained" color="success" type="submit">
            Registr
          </Button>
        </ContainerInput>
      </form>
    </div>
  );
}

export default Register;
