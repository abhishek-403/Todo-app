import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchNotes= createAsyncThunk('/fetchNotes',async(body,_)=>{
   

})


const notesSlice= createSlice({
    name:"notesSlice",
    initialState:{
        notes:[]

    },

    reducers:{
        addTask:(state,action)=>{
            state.notes.push(action.payload);
        },
        removeTask:(state,action)=>{
            state.notes = state.notes.filter(e => e.id !== action.payload);

        }

    }
})

export default notesSlice.reducer;
export const{addTask,removeTask}= notesSlice.actions;