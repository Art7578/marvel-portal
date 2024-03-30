import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './reducers/charactersReducer'; 
import characterInfoReducer from "./reducers/characterInfoReducer";

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        characterInfo: characterInfoReducer,
    },
});

export default store;