import { createSlice } from "@reduxjs/toolkit"
export const counterSlice = createSlice({
    name:'counter',
     initialState :{
        value:11
     },

     reducers:{
        increment: (state) =>{
            state.value+=1;
        },
        decrement : (state) =>{
          state.value -= 1;
        },
        increment5 :(state) =>{
            state.value -= 5;
        },

        incrementbyAmount :(state , actions) =>{
            state.value +=actions.payload
        }
     }
})

export const { increment , decrement , increment5, incrementbyAmount} = counterSlice.actions ;
export default counterSlice.reducer