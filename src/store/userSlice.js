// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Initial state properties here
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
