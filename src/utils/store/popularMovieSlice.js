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
        }
    }
})

export const { addMovies, addMoviesVideos } = popularMovieSlice.actions;

export default popularMovieSlice.reducer;