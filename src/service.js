import { API_KEY, PRIVATE_KEY } from "./keys";
import { getAllCharactersRequest, getAllCharactersSuccess, getAllCharactersFailure } from "./redux/actions/charactersActions";
import md5 from "crypto-js/md5";
import axios from 'axios';

const timestamp = 1;
const url = "https://gateway.marvel.com:443/v1/public/";
const key = API_KEY; 
const private_key = PRIVATE_KEY; 
const hash = md5(timestamp + private_key + key);
const limit = 20;

const getAllCharacters = (offset = 0) => {
    return async (dispatch) => {
        dispatch(getAllCharactersRequest()); 

        try {
            const response = await axios.get(`${url}characters?ts=${timestamp}&limit=${limit}&offset=${offset}&apikey=${key}&hash=${hash}`);
            const characters = response.data.data.results.map(character => {
                const { id, name, description, thumbnail, urls } = character;
                const homepage = urls.find(url => url.type === "detail")?.url || "";
                const wiki = urls.find(url => url.type === "wiki")?.url || "";
                return { id, name, description, thumbnail, homepage, wiki };
            });

            dispatch(getAllCharactersSuccess(characters)); 
        } catch (error) {
            console.error('Error fetching characters:', error);
            dispatch(getAllCharactersFailure(error)); 
        }
    };
};

const getCharacterInfo = async (characterId) => {
    const response = await axios.get(`${url}characters/${characterId}?ts=${timestamp}&apikey=${key}&hash=${hash}`);
    return response.data.data.results[0];
  };


export { getAllCharacters, getCharacterInfo };