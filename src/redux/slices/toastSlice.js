import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
    name:'toastslice',
    initialState:{
        toastData:{}
    },
    reducers: {
       
        showToast:(state,action)=>{
            state.toastData= action.payload
        }


    },
})

export default toastSlice.reducer
export const {showToast } = toastSlice.actions;