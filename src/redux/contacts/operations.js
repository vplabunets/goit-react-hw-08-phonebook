import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from 'components/lib/axiosConfig';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://connections-api.herokuapp.com/contacts`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContactData, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://connections-api.herokuapp.com/contacts`,
        {
          ...newContactData,
        }
      );
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${contactId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
