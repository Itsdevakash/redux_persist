import { createSlice } from "@reduxjs/toolkit";

const loginslice = createSlice({
    name:'login',
    initialState:null,
    reducers:{
        setUser:(state,action)=>{
             state = action.payload
             return state
        },
        removeUser:(state)=>{
            state = null
            return state
        }
    }
})


export const {setUser,removeUser} = loginslice.actions
export default loginslice.reducer