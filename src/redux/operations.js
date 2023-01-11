import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://63bc0c08fa38d30d85b994d7.mockapi.io';

axios.defaults.baseURL=  'https://6398e44229930e2bb3c4ce22.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); 
  
export const addContact = createAsyncThunk(
  'contacts/addContact',
    async ({ name, phone }, thunkAPI) => {
        console.log('name', name);
         console.log('phone', phone);
    try {
      const response = await axios.post('/contacts', {
        name,
        phone,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


