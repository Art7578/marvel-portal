import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './reducers/charactersReducer'; 
import characterInfoReducer from "./reducers/characterInfoReducer";
import comicsReducer from "./reducers/comicsReducer";
import comicInfoReducer from "./reducers/comicInfoReducer";

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        characterInfo: characterInfoReducer,
        comics: comicsReducer,
        comicInfo: comicInfoReducer,
    },
});

export default store;