import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";
import loginSlice from "./slices/loginslice"
import themeSlice from "./slices/themeslice";


const setup = {
    key:'credential',
    version: 1,
    storage: storage
}

const slices = combineReducers({
    loginSlice,
    themeSlice
})

const store = configureStore({
    // reducer:{
    //     loginSlice
    // }

    reducer : persistReducer(setup, slices),
    devTools: true,
    middleware:(config)=>config({
        serializableCheck:false
    })
})

export default store