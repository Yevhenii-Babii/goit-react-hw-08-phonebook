import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAPI } from 'redux/services/UserApi';

export const registerUserRequest = createAsyncThunk(
  'user/register',
  async (formData, thunkApi) => {
    try {
      const response = await UserAPI.register(formData);
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUserRequest = createAsyncThunk(
  'user/login',
  async (formData, thunkApi) => {
    try {
      const response = await UserAPI.loginIn(formData);
      localStorage.setItem('token', response.token);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authUserRequest = createAsyncThunk(
  '/user/auth',
  async (_, thunkApi) => {
    try {
      const response = await UserAPI.currentaFetch();

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOutRequest = createAsyncThunk(
  '/user/logOut',
  async (_, thunkApi) => {
    try {
      const response = await UserAPI.userLogOutRequest();
      localStorage.removeItem('token');

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerUserRequest.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addCase(registerUserRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUserRequest.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addCase(loginUserRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(authUserRequest.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authUserRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(authUserRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOutRequest.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = null;
        state.userData = null;
      })
      .addCase(logOutRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = userSlice.reducer;
