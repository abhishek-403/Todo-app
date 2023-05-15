import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/NotesSlice";

export default configureStore({
    reducer:{
         notesReducer,
    }
})