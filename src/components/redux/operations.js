import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://65c9383ba4fbc162e112b881.mockapi.io';


//payloadCreator 
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

// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async ({ name, phone }, thunkAPI) => {
//         const contactData = { name, phone };

//         try {
//             const response = await axios.post('/contacts', contactData);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );


export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }, thunkAPI) => {
        const contactData = { name, phone };

        try {
            const response = await axios.post('/contacts', contactData);
            return response.data;
        } catch (error) {
            // You can handle the error here if needed
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data.id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);