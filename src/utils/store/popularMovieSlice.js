import { createSlice } from "@reduxjs/toolkit";

const popularMovieSlice = createSlice({
    name: "popularMovies",
    initialState: {
        popularMovies: []
    },
    reducers: {
        addMovies: (state, action)=>{
            state.popularMovies = action.payload;
        }
    }
})

export const { addMovies } = popularMovieSlice.actions;

export default popularMovieSlice.reducer;