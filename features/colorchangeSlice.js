import { createSlice } from "@reduxjs/toolkit";

export const colorchangeSlice = createSlice({
    name: "colorchange",
    initialState: {
        values: localStorage.getItem("colorchange")
            ? JSON.parse(localStorage.getItem("colorchange"))
            : false,
    },
    reducers: {
        colorChange: (state, actions) => {
            state.values = actions.payload;
        },
    },
});

export const { colorChange } = colorchangeSlice.actions;

export default colorchangeSlice.reducer;