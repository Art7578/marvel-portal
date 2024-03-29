import { API_KEY, PRIVATE_KEY } from "./keys";
import { getAllCharactersRequest, getAllCharactersSuccess, getAllCharactersFailure } from "./redux/actions/charactersActions";
import md5 from "crypto-js/md5";
import axios from 'axios';


const getAllCharacters = (offset = 0) => {
    return async (dispatch) => {
        dispatch(getAllCharactersRequest()); // Отправляем запрос на получение персонажей

        try {
            const timestamp = 1;
            const url = "https://gateway.marvel.com:443/v1/public/";
            const key = API_KEY; // Убедитесь, что у вас есть переменная API_KEY
            const private_key = PRIVATE_KEY; // Убедитесь, что у вас есть переменная PRIVATE_KEY
            const hash = md5(timestamp + private_key + key);
            const limit = 20;

            const response = await axios.get(`${url}characters?ts=${timestamp}&limit=${limit}&offset=${offset}&apikey=${key}&hash=${hash}`);
            const characters = response.data.data.results.map(character => {
                const { id, name, description, thumbnail, urls } = character;
                const homepage = urls.find(url => url.type === "detail")?.url || "";
                const wiki = urls.find(url => url.type === "wiki")?.url || "";
                return { id, name, description, thumbnail, homepage, wiki };
            });

            dispatch(getAllCharactersSuccess(characters)); // Диспатчим успешное завершение запроса с данными
        } catch (error) {
            console.error('Error fetching characters:', error);
            dispatch(getAllCharactersFailure(error)); // Диспатчим ошибку при получении персонажей
        }
    };
};

export { getAllCharacters };