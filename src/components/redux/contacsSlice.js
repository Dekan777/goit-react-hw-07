import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations'

const contacsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null
    },
    // Додаємо обробку зовнішніх екшенів
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});


export const tasksReducer = contacsSlice.reducer;
// reducers: {

//     fetchingInProgress(state) {
//         state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//     },
//     fetchingError(state, action) {
//         state.isLoading = false;
//         state.error = action.payload;
//     },

//     addContact: {
//         reducer(state, action) {
//             state.contacts.push(action.payload);
//         }
//     },
//     removeContact: {
//         reducer(state, action) {
//             state.contacts = state.contacts.filter(
//                 contact => contact.id !== action.payload
//             );
//         }
//     }
// }

export const { fetchingInProgress, fetchingSuccess, fetchingError, addContact, removeContact } = contacsSlice.actions;


export const contacsReducer = contacsSlice.reducer;