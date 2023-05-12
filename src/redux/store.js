import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/TaskSlice";

export default configureStore({
    reducer:{
        taskReducer,
    }
})