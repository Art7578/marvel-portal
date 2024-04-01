import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './reducers/charactersReducer'; 
import characterInfoReducer from "./reducers/characterInfoReducer";
import comicsReducer from "./reducers/comicsReducer";
import comicInfoReducer from "./reducers/comicInfoReducer";
import seriesReducer from "./reducers/seriesReducer";

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        characterInfo: characterInfoReducer,
        comics: comicsReducer,
        comicInfo: comicInfoReducer,
        series: seriesReducer,
    },
});

export default store;