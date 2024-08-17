import { createSlice } from "@reduxjs/toolkit";

const appInfoSlice = createSlice({
    name: "appInfo",
    initialState: {
        windowHeight: null,
        videoListHeight: null,
        loading: null
    },
    reducers: {
        addWindowHeight: (state, action)=>{
            state.windowHeight = action.payload
        },
        removeWindowHeight: (state, action)=> {
            state.windowHeight = 0;
        },
        addvideoListHeight: (state, action)=>{
            state.videoListHeight = action.payload;
        },
        changeLoading: (state, action)=>{
            state.loading = action.payload;
        }
    }
})

export const { addWindowHeight, removeWindowHeight, addvideoListHeight, changeLoading } = appInfoSlice.actions;

export default appInfoSlice.reducer;