import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
    name: "nowplaying",
    initialState: {
        nowPlayingMovies: [],
        trailerMovie: [],
        nowPlayingMoviesVideos: []
    },
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerMovie: (state, action)=>{
            state.trailerMovie = action.payload;
        },
        addNowPlayingMoviesVideos: (state, action)=>{
            state.nowPlayingMoviesVideos.push(action.payload)
        }
    }
})

export const { addNowPlayingMovies, addTrailerMovie, addNowPlayingMoviesVideos } = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;