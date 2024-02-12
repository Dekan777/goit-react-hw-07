import { createSlice } from '@reduxjs/toolkit';

export const contacsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        loading: false,
        error: null
    },
    reducers: {

        fetchingInProgress(state) {
            state.isLoading = true;
        },
        fetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        fetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            }
        },
        removeContact: {
            reducer(state, action) {
                state.contacts = state.contacts.filter(
                    contact => contact.id !== action.payload
                );
            }
        }
    }
});


export const { addContact, removeContact } = contacsSlice.actions;


export const contacsReducer = contacsSlice.reducer;