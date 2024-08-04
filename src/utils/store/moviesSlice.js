import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        trailerMovie: []
    },
    reducers: {
        addMovies: (state, action)=>{
            state.movies = action.payload;
        },
        addTrailerMovie: (state, action)=>{
            state.trailerMovie = action.payload;
        }
    }
})

export const { addMovies, addTrailerMovie } = moviesSlice.actions;

export default moviesSlice.reducer;