import { createSlice } from "@reduxjs/toolkit";

const popularMovieSlice = createSlice({
    name: "popularMovies",
    initialState: {
        popularMovies: [],
        popularMoviesVideos: [],
    },
    reducers: {
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
    }    
})

export const { addPopularMovies } = popularMovieSlice.actions;

export default popularMovieSlice.reducer;