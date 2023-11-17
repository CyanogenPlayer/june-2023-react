import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    prevPage: null,
    nextPage: null
}

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const {info: {next, prev}, results} = action.payload;
            state.characters = results
            state.prevPage = prev
            state.nextPage = next
        }
    }
});

const {reducer: characterReducer, actions} = characterSlice;

const characterActions = {
    ...actions
}

export {
   characterActions,
   characterReducer
}