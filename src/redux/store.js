import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from './reducers/charactersReducer'; // Подставьте правильный путь к вашему редьюсеру

const store = configureStore({
    reducer: {
        characters: charactersReducer, // Замените на ваш редьюсер
    },
});

export default store;