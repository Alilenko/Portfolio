import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import about from '../img/about.jpg'


const initialState = {
    about1: about
 
}

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        
    }
})

const {actions, reducer} = portfolioSlice;
export default reducer;
export const {
  
} = actions;