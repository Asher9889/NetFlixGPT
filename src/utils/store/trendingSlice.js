import { createSlice } from "@reduxjs/toolkit";

const trendingSlice = createSlice(({
    name: "trendingMovies",
    initialState: {
        trendingMovies: [],
    },
    reducers:{
        addTrendingMovies: (state, action)=>{
            state.trendingMovies = action.payload;
        }
    }
}))


export const { addTrendingMovies } = trendingSlice.actions;
export default trendingSlice.reducer;