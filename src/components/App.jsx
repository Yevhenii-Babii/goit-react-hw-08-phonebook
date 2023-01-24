// import { Form } from './Form/Form';
// import { List } from './List/List';
// import { Filter } from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts, selectFilter } from 'redux/selectors';
import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { fetchApi } from 'redux/operations';
import Register from './Pages/RegisterPage/RegisterPage';
import Layout from './Layout/Layout';
import { ContactPage } from './Pages/ContactPage/ContactPage';
import Login from './Pages/LoginPage/loginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUserRequest } from 'redux/auth/UserSlice';

export function App() {

  const dispatch = useDispatch(); 

useEffect(()=> {
const token = localStorage.getItem('token')
if(!token) return 
dispatch(authUserRequest())
},[dispatch])

  return (
    <>
    <Routes>
<Route path='/' element={<Layout/>}>
<Route path='/register' element={<Register/>}></Route>   
<Route path='/contacts' element={<ContactPage/>}></Route>
<Route path='/login' element={<Login/>}></Route>
</Route>

    

      </Routes>
    </>
  );
}
