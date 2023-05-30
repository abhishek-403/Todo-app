import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";


export const fetchProfile = createAsyncThunk('/fetchProfile', async () => {
    try {
        const response = await axiosClient.get('/user/myprofile');
        return response.message.curUser;

    } catch (e) {
        return Promise.reject(e)

    }


})




const appConfigSlice = createSlice({
    name: "appconfig",
    initialState: {
        myProfile: {},

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.myProfile = action.payload;
            })
    }

})

export default appConfigSlice.reducer;
