import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from 'lib/axiosConfig';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/signup`, credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post(`/users/login`, credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/logout`, credentials);

      clearAuthHeader(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) {
    return thunkAPI.rejectWithValue('No valid token');
  }

  setAuthHeader(token);
  try {
    const { data } = await axios.get(
      'https://connections-api.herokuapp.com/users/current'
    );
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const operations = {
  register,
  logOut,
  logIn,
  refreshUser,
};
export default operations;
