import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
});
