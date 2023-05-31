import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";


export const fetchProfile = createAsyncThunk('/fetchProfile', async () => {
    try {
        const response = await axiosClient.get('/user/myprofile');
        return response.message.curUser;

    } catch (e) {
        return ({
            tasks:
            [{
                hslCol: 240,
                subject: "Welcome!",
                description: "Hi, welcome to the YourNotes, an app to organize your thoughts, tasks and ideas with user-friendly interface and real-time syncing.\nCreate your first note now!(This note will automatically delete after you create your first note.)",
                createdAt: "2023-05-31",
                updatedAt: "2023-05-31"
            }]

        })

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
                if (state.myProfile.tasks.length === 0) {
                    state.myProfile.tasks.push({
                        hslCol: 240,
                        subject: "Welcome!",
                        description: "Hi, welcome to the YourNotes, an app to organize your thoughts, tasks and ideas with user-friendly interface and real-time syncing.\nCreate your first note now!(This note will automatically delete after you create your first note.)",
                        createdAt: "2023-05-31",
                        updatedAt: "2023-05-31"

                    })
                }

            })
    }

})

export default appConfigSlice.reducer;
