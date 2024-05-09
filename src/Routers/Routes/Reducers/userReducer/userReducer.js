import { createSlice, current } from "@reduxjs/toolkit";



const intialUser={
    currentUser:null
}



const userSlice= createSlice({
    name:"user",
    initialState:intialUser,
    reducers:{
        setCurrentUser: (state, action)=>{
            state.currentUser= action.payload;
        }
    }
})



export const userReducer=userReducer.reducers;

export const {setCurrentUser}= userReducer.action;
