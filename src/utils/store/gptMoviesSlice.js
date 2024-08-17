import { createSlice } from "@reduxjs/toolkit";

const gptMoviesSlice = createSlice({
    name: "gptMovies",
    initialState: {
        gptMovieData: null
    },
    reducers: {
        addGPTDataToSlice: (state, action)=>{
            state.gptMovieData = action.payload
        },
        removeGPTData: (state,action)=>{
            state.gptMovieData.length = 0
        }
    }

})


export const { addGPTDataToSlice, removeGPTData } = gptMoviesSlice.actions
export default gptMoviesSlice.reducer;