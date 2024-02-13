import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations'

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
};

export const contacsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts.push(action.payload);
            })
            .addCase(addContact.rejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = state.contacts.filter(
                    contact => contact.id !== action.payload
                );
            })
            .addCase(deleteContact.rejected, handleRejected);
    },
});



export const contactsReducer = contacsSlice.reducer;

