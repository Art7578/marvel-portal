import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './reducers/charactersReducer'; 
import characterInfoReducer from "./reducers/characterInfoReducer";
import comicsReducer from "./reducers/comicsReducer";
import comicInfoReducer from "./reducers/comicInfoReducer";
import seriesReducer from "./reducers/seriesReducer";
import seriesInfoReducer from "./reducers/seriesInfoReducer";
import storiesReducer from "./reducers/storiesReducer";
import storiesInfoReducer from "./reducers/storiesInfoReducer";

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        characterInfo: characterInfoReducer,
        comics: comicsReducer,
        comicInfo: comicInfoReducer,
        series: seriesReducer,
        seriesInfo: seriesInfoReducer,
        stories: storiesReducer,
        storiesInfo: storiesInfoReducer,
    },
});

export default store;