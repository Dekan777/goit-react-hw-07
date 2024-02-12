// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
} from "./contacsSlice";
axios.defaults.baseURL = 'https://65c9383ba4fbc162e112b881.mockapi.io';


export const fetchContacts = () => async dispatch => {
    try {
        // Індикатор завантаження
        dispatch(fetchingInProgress());
        // HTTP-запит
        const response = await axios.get("/contacts");
        // Обробка даних
        dispatch(fetchingSuccess(response.data));
    } catch (e) {
        // Обробка помилки
        dispatch(fetchingError(e.message));
    }
};

// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get('/contacts');
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

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