import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1: 0
}

const counter1Slice = createSlice({
    name: 'counter1Slice',
    initialState,
    reducers: {
        increment: (state) => {
            state.count1++
        },
        decrement: (state) => {
            state.count1--
        },
        reset: (state) => {
            state.count1 = 0
        }
    }
});

const {reducer: counter1Reducer, actions: {increment, decrement, reset}} = counter1Slice;

const counter1Action = {
    increment,
    decrement,
    reset
}

export {
    counter1Reducer,
    counter1Action
}