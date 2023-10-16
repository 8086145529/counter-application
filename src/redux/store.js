import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store = configureStore({// configureStore is a predefined function from redux toolkit
    reducer:{ // This contains so many reducers for so many state
        // reducers should be given as key-value pairs since there will be more than one reducers in a project
        counter:counterSlice //counterSlice is the name of the slice(which is function) we created which contains both the action and reducer
        // So storeile counter key eduthal counterSlice kittum.so counterSliceinte ullile count key eduthal aa count enna stateine kittum/athinte valuene kittum
    }
})