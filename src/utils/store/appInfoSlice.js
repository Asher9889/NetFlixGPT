import { createSlice } from "@reduxjs/toolkit";

const appInfoSlice = createSlice({
    name: "appInfo",
    initialState: {
        windowHeight: null,
    },
    reducers: {
        addWindowHeight: (state, action)=>{
            state.windowHeight = action.payload
        },
        removeWindowHeight: (state, action)=> {
            state.windowHeight = 0;
        }
    }
})

export const { addWindowHeight, removeWindowHeight } = appInfoSlice.actions;

export default appInfoSlice.reducer;