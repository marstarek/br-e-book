import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import loaderSlice from "./loaderSlice";
export default configureStore({
    reducer: {
        modal: modalReducer,
        loader:loaderSlice


    },
});