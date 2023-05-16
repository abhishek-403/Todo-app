import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./slices/appConfigSlice";
import toastReducer from "./slices/toastSlice";

export default configureStore({
    reducer:{
         appConfigReducer,
         toastReducer
    }
})