import {configureStore} from "@reduxjs/toolkit";

import {characterReducer, episodeReducer} from "./slices";

const store = configureStore({
    reducer: {
        episodes: episodeReducer,
        characters: characterReducer
    }
});

export {
    store
}