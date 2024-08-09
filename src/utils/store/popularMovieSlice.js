import { createSlice } from "@reduxjs/toolkit";

const popularMovieSlice = createSlice({
    name: "popularMovies",
    initialState: {
        popularMovies: [],
        popularMoviesVideos: [],
    },
    reducers: {
        addMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        addMoviesVideos: (state, action)=>{
            state.popularMoviesVideos.push(action.payload);
        },
        removeAddMoviesVideos: (state, action)=>{
            state.popularMoviesVideos.length = 0;
        }
    }
})

export const { addMovies, addMoviesVideos, removeAddMoviesVideos } = popularMovieSlice.actions;

export default popularMovieSlice.reducer;