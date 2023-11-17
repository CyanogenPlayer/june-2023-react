import {configureStore} from "@reduxjs/toolkit";
import {characterReducer} from "./slices";

const store = configureStore({
    reducer: {
        characters: characterReducer
    }
});

export {
    store
}