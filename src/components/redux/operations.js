import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://65c9383ba4fbc162e112b881.mockapi.io';

// import {
//     fetchingInProgress,
//     fetchingSuccess,
//     fetchingError,
// } from "./contacsSlice";


// export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
//     const response = await axios.get("/contacts");
//     return response.data;
// });

// export const fetchContacts = createAsyncThunk(
//     "tasks/fetchAll",
//     // Використовуємо символ підкреслення як ім'я першого параметра,
//     // тому що в цій операції він нам не потрібен
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get("/contacts");
//             // При успішному запиті повертаємо проміс із даними
//             return response.data;
//         } catch (e) {
//             // При помилці запиту повертаємо проміс
//             // який буде відхилений з текстом помилки
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// );

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

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (contact, thunkAPI) => {
//         try {
//             const response = await axios.post('/contacts', contact);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// export const deleteContact = createAsyncThunk(
//     'contacts/deleteContact',
//     async (id, thunkAPI) => {
//         try {
//             const response = await axios.delete(`/contacts/${id}`);
//             return response.data.id;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );