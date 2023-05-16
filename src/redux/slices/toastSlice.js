import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
    name:'toastslice',
    initialState:{
        isLoading:false,
        toastData:{}
    },
    reducers: {
        setLoader: (state, action) => {
            state.isLoading = action.payload;
        },
        showToast:(state,action)=>{
            state.toastData= action.payload
        }


    },
})

export default toastSlice.reducer
export const { setLoader,showToast } = toastSlice.actions;