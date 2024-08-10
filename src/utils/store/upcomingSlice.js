import { createSlice } from "@reduxjs/toolkit";

const upcomingSlice = createSlice({
    name: "upcomingMovies",
    initialState: {
        upcomingMovies: []
    },
    reducers: {
        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload;
        }
    }
})


export const { addUpcomingMovies } = upcomingSlice.actions
export default upcomingSlice.reducer;