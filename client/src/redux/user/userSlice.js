import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isLoading: false,
    isError: false
};

export const userSlice = createSlice({
    name: 'user', // identification name of the slice
    initialState,
    reducers: { // functions to change the state 
        resetState: (state) => {
            state.currentUser = null;
            state.isLoading = false;
            state.isError = false; 
        },
        signInStart: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isLoading = true;
            state.isError = false;
        },
        // fetched data can be added to reducer as "action" as action-payload
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        signInFailure: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },
        updateUserStart: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        updateUserFailure: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },
        deleteUserStart: (state) => {
            state.isLoading = true;
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.isLoading = false;
            state.isError = false;
        },
        deleteUserFailure: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },
        signOut: (state) => {
            state.currentUser = null;
            state.isLoading = false;
            state.isError = false;
        }
    },
});

// Action creators are generated for each case reducer function
export const {
    resetState,
    signInStart, signInSuccess, signInFailure,
    updateUserStart, updateUserSuccess, updateUserFailure,
    deleteUserStart, deleteUserSuccess, deleteUserFailure,
    signOut
} = userSlice.actions;

export default userSlice.reducer