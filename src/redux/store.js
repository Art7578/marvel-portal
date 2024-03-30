import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './reducers/charactersReducer'; 
import characterInfoReducer from "./reducers/characterInfoReducer";
import comicsReducer from "./reducers/comicsReducer";

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        characterInfo: characterInfoReducer,
        comics: comicsReducer,
    },
});

export default store;