import { createSlice } from "@reduxjs/toolkit";

const top10MovieSlice = createSlice({
    name: "top10Movies",
    initialState: {
        top10Movies: []
    },
    reducers: {
        addMovies: (state, action)=>{
            state.top10Movies = action.payload;
        }
    }
})

export const { addMovies }  = top10MovieSlice.actions;
export default top10MovieSlice.reducer