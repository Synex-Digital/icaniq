import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name: "questionid",
    initialState: {
        value: 1,
    },
    reducers: {
        questionid: (state, actions) => {
            state.value = actions.payload;
        },
    },
});

export const { questionid } = questionSlice.actions;

export default questionSlice.reducer;
