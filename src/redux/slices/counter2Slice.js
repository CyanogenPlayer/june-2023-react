import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count2: 0
};

const counter2Slice = createSlice({
    name: 'counter2Slice',
    initialState,
    reducers: {
        increment: (state) => {
            state.count2++
        },
        decrement: (state) => {
            state.count2--
        },
        reset: (state, action) => {
            state.count2 = action.payload
        }
    }
});

const {reducer: counter2Reducer, actions: {increment, decrement, reset}} = counter2Slice;

const counter2Actions = {
    increment,
    decrement,
    reset
}

export {
    counter2Actions,
    counter2Reducer
}