import { createSlice, current } from "@reduxjs/toolkit";



const intialUser = {
    currentUser: null
}



const userSlice = createSlice({
    name: "user",
    initialState: intialUser,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }
})



export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;
