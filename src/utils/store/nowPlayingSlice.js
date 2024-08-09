import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
    name: "nowplaying",
    initialState: {
        nowPlayingMovies: [],
        trailerMovie: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerMovie: (state, action)=>{
            state.trailerMovie = action.payload
        }
    }
})

export const { addNowPlayingMovies, addTrailerMovie } = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;