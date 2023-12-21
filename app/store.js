import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/navSlice";
import questionReducer from "../features/questionSlice";
import userReducer from "../features/userSlice";
import tokenReducer from "../features/tokenSlice";
import examQuestionReducer from "../features/examQuestionSlice";
import modelTestReducer from "../features/modelTestSlice";
import examidReducer from "../features/examIdSlice";
import resultReducer from "../features/resultSlice";

export const store = configureStore({
    reducer: {
        loggedUser: userReducer,
        tokened: tokenReducer,
        counter: counterReducer,
        queis: questionReducer,
        question: examQuestionReducer,
        userModelTest: modelTestReducer,
        examid: examidReducer,
        examresult: resultReducer,
    },
});
