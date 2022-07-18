import {  createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: false,
};

export const loggedSlice = createSlice({
    name: "logged",
    initialState,
    reducers: {
        login: (state) => {
            state.value = true;
        },
        logout: (state) => {
            state.value = false;
        }
    }
});

export const { login, logout} = loggedSlice.actions;
export const selectLog = (state) => state.logged.value;
export default loggedSlice.reducer;
