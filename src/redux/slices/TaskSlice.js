import { createSlice } from "@reduxjs/toolkit";

const taskSlice= createSlice({
    name:"taskSlice",
    initialState:{
        tasks:[]

    },

    reducers:{
        addTask:(state,action)=>{
            state.tasks.push(action.payload);
        },
        removeTask:(state,action)=>{
            state.tasks = state.tasks.filter(e => e.id !== action.payload);

        }

    }
})

export default taskSlice.reducer;
export const{addTask,removeTask}= taskSlice.actions;