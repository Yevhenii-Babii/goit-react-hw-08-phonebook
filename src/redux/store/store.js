import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/UserSlice';
import { filterReducer } from 'redux/filter/filterSlice';
import { contactReducer } from 'redux/slice/contactSlice';





export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterReducer
  },
});

