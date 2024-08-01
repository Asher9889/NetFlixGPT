import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: null,
        email: null,
    },

    reducers: {
        addEmail: (state, action)=>{
            state.email = action.payload; 
        }
    }

})

export const { addEmail } = userSlice.actions;

export default userSlice.reducer;