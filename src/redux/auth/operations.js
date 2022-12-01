import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        credentials
      );
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post(
      'https://connections-api.herokuapp.com/users/login',
      credentials
    );
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
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/users/logout',
        credentials
      );
      clearAuthHeader();
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
