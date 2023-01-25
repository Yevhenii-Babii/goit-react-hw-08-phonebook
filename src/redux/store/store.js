import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/UserSlice';
import { contactReducer } from 'redux/slice/contactSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
  },
});
