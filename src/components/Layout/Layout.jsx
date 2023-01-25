import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logOutRequest } from 'redux/auth/UserSlice.js';
import { selectUser } from 'redux/selectors.js';

import Button from '@mui/material/Button';

import { Links, Navigations } from '../Layout/Layout.styled.js';

export default function Layout() {
  const userData = useSelector(selectUser);
  const userLogIn = userData !== null;
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOutRequest())
  }
  return (
    <>
      <header>
        <Navigations>
          {userLogIn ? (
            <>
            <Links to="/contacts"> Contacts </Links> 
            <Button type='button' onClick={onLogOut}> Log out </Button>
            </>
          ) : (
            <>
              <Links to="/register"> Register </Links>
              <Links to="/login"> Login </Links>
            </>
          )}
        </Navigations>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
