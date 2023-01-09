import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsArr: [],
  },
  reducers: {
    addFromLocalStorage(state, action) {
      state.contactsArr = action.payload;
    },

    addContacts(state, action) {
      state.contactsArr.push(action.payload);
    },
    deleteContacts(state, action) {
      state.contactsArr = state.contactsArr.filter(
        ({ id }) => id !== action.payload
      );
    },
  },
});

export const { addContacts, deleteContacts, addFromLocalStorage } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;