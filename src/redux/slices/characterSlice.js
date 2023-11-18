import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState = {
    characters: [],
    errors: null
}

const getByIds = createAsyncThunk(
    'characterSlice/getByIds',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getByIds(ids);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getByIds.fulfilled, (state, action) => {
                state.characters = action.payload
            })

            .addMatcher(isFulfilled(getByIds), state => {
                state.errors = null
            })
            .addMatcher(isRejected(getByIds), (state, action) => {
                state.errors = action.payload
            })
    }
});

const {reducer: characterReducer, actions} = characterSlice;

const characterAction = {
    ...actions,
    getByIds
}

export {
    characterAction,
    characterReducer
}