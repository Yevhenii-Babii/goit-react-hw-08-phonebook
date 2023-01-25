import Register from './Pages/RegisterPage/RegisterPage';
import Layout from './Layout/Layout';
import Login from './Pages/LoginPage/loginPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUserRequest } from 'redux/auth/UserSlice';
import ContactPage from './Pages/ContactPage/ContactPage';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    dispatch(authUserRequest());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contacts" element={<ContactPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}
