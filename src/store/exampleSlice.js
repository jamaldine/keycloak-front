// exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Initial state properties here
    data: {
        exampleValue: null,
        exampleValue1: 'hello world !',
    },
    loading: false,
    error: null,
};

const exampleSlice = createSlice({
    name: 'examplessssssssssssssssssssssssssssssssssssssssssssssssssssssss',
    initialState,
    reducers: {
        setExampleValue(state, action) {
            state.data.exampleValue = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { setExampleValue, setLoading, setError } = exampleSlice.actions;
export default exampleSlice.reducer;
