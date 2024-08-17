import { createSlice } from "@reduxjs/toolkit";

const gptMoviesSlice = createSlice({
    name: "gptMovies",
    initialState: {
        gptMovieData: null
    },
    reducers: {
        addGPTDataToSlice: (state, action)=>{
            state.gptMovieData = action.payload
        }
    }

})


export const { addGPTDataToSlice } = gptMoviesSlice.actions
export default gptMoviesSlice.reducer;