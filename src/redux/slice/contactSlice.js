import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ContactsAPI } from 'redux/services/UserApi';

export const getContactRequest = createAsyncThunk(
  'contacts/get',
  async (_, thunkApi) => {
    try {
      const response = await ContactsAPI.getContactsRequest();
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactRequest = createAsyncThunk(
  'contacts/add',
  async (contactData, thunkApi) => {
    try {
      const response = await ContactsAPI.addContactRequest(contactData);
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deletContactRequest = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkApi) => {
    try {
      const response = await ContactsAPI.deleteContactRequest(contactId);
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


const initialState = {
   contacts: null,
    isLoading: false,
    error: null
};

const contactSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
  builder
    .addCase(getContactRequest.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getContactRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    })
    .addCase(getContactRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(addContactRequest.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(addContactRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts= [...state.contacts, action.payload];
    })
    .addCase(addContactRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(deletContactRequest.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(deletContactRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      const deleteContact = action.payload.id;
      state.contacts = state.contacts.filter(contact => contact.id !== deleteContact )
    })
    .addCase(deletContactRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

  })
  
export const contactReducer = contactSlice.reducer;
