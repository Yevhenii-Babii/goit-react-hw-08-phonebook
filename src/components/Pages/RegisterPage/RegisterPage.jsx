import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { registerUserRequest } from 'redux/auth/UserSlice';
import { selectUser } from 'redux/selectors';


function Register() {

    const dispatch = useDispatch();
  
 
    const navigation = useNavigate();

    const userData = useSelector(selectUser);
   
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
      if(userData !== null) {
          navigation('/contacts')
      }

  },[userData, navigation])

  
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = {
          name,
          email,
          password,
      };
  
      dispatch(registerUserRequest(formData));
    }
  
    return (
      <div>
        <h1>Реєстрація</h1>
    
  
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              onChange={e => setName(e.target.value)}
              value={name}
              type="text"
              required
            />
          </label>
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
          <button type="submit">Зареєструватися</button>
        </form>
      </div>
    );
  }
 

  export default Register;
