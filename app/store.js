import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/navSlice";
import questionReducer from "../features/questionSlice";
import userReducer from "../features/userSlice";
import tokenReducer from "../features/tokenSlice"

export const store = configureStore({
    reducer: {
        loggedUser: userReducer,
        tokened : tokenReducer,
        counter: counterReducer,
        queis: questionReducer,
    },
});
