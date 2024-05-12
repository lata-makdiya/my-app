import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
};

export const FormData = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
        }
    }
});

export const { addData } = FormData.actions;

export default FormData.reducer;
