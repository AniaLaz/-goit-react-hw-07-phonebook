import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/sliseContacts';
import { filterReducer } from '../redux/sliseFilter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

