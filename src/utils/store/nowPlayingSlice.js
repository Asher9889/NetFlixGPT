import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
    name: "nowplaying",
    initialState: {
        nowPlayingMovies: []
    },
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        
    }
})

export const { addNowPlayingMovies } = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;