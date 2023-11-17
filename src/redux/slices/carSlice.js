import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        trigger: (state) => {
            state.trigger = !state.trigger
        }
    }
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}