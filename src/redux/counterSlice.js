import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{ // sliceinakath (counterSlice) reducers enna keykk akath object aayitt venam increment poleyulla actions paranj kodukkan  
        increment:(state)=>{// increment is the name of the action.aa actionil value oru callback aayi venam kodukkan.state enna predefined key use cheythal mathraman namuk ividethe state aayitula count enna stateine access cheyan patttukayullu.so ath () ullil kodukkuka.then state.count enn koduthal count stateine update cheyam
            state.count += 1 // state.count += 1 ingane kodukkumbol countinte valueinte koode 1 add aayitt aa puthiya value count stateil poyi add aavum.ithreyum aan increment enna actionil vendath
        },
        decrement:(state)=>{
            state.count -= 1
        },
        reset:(state)=>{
            state.count = 0
        },
        incrementByAmount:(state,action)=>{
            state.count += action.payload
        }
    }
}) 

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions // This means counterSliceile actionsil ninnum increment,decrement,reset ivare 3 pereyum export cheyunnu
export default counterSlice.reducer // This means counterSliceile reducer key use cheyth counterSlice enna reducer export cheyunnu to store.Remainder: reducers key alla reducer key