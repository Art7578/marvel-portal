import { API_KEY, PRIVATE_KEY } from "./keys";
import { getAllCharactersRequest, getAllCharactersSuccess, getAllCharactersFailure } from "./redux/actions/charactersActions";
import { getAllComicsRequest, getAllComicsSuccess, getAllComicsFailure } from "./redux/actions/comicsActions";
import { getAllSeriesRequest, getAllSeriesSuccess, getAllSeriesFailure } from "./redux/actions/seriesActions";
import { getAllStoriesRequest, getAllStoriesSuccess, getAllStoriesFailure } from "./redux/actions/storiesActions";
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
                const { id, name, thumbnail, urls } = character;
                const homepage = urls.find(url => url.type === "detail")?.url || "";
                const wiki = urls.find(url => url.type === "wiki")?.url || "";
                return { id, name, thumbnail, homepage, wiki };
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

const getAllComics = (offset = 0) => {
    return async (dispatch) => {
        dispatch(getAllComicsRequest()); 

        try {
            const response = await axios.get(`${url}comics?ts=${timestamp}&limit=${limit}&offset=${offset}&apikey=${key}&hash=${hash}`);
            const comics = response.data.data.results.map(comic => {
                const { id, title, thumbnail, urls } = comic;
                const detailUrl = urls.find(url => url.type === "detail")?.url || "";
                return { id, title, thumbnail, detailUrl };
            });

            dispatch(getAllComicsSuccess(comics)); 
        } catch (error) {
            console.error('Error fetching comics:', error);
            dispatch(getAllComicsFailure(error)); 
        }
    };
};

const getComicInfo = async (comicId) => {
    const response = await axios.get(`${url}comics/${comicId}?ts=${timestamp}&apikey=${key}&hash=${hash}`);
    return response.data.data.results[0];
};

const getAllSeries = (offset = 0) => {
    return async (dispatch) => {
      dispatch(getAllSeriesRequest());
  
      try {
        const response = await axios.get(`${url}series?ts=${timestamp}&limit=${limit}&offset=${offset}&apikey=${key}&hash=${hash}`);
        const series = response.data.data.results.map(series => {
          const { id, title, urls, thumbnail } = series;
          return { id, title, urls, thumbnail };
        });
  
        dispatch(getAllSeriesSuccess(series));
      } catch (error) {
        console.error('Error fetching series:', error);
        dispatch(getAllSeriesFailure(error));
      }
    };
  };

const getSeriesInfo = async (seriesId) => {
    const response = await axios.get(`${url}series/${seriesId}?ts=${timestamp}&apikey=${key}&hash=${hash}`);
    return response.data.data.results[0];
};

const getAllStories = (offset = 0) => {
    return async (dispatch) => {
        dispatch(getAllStoriesRequest()); 

        try {
            const response = await axios.get(`${url}stories?ts=${timestamp}&limit=${limit}&offset=${offset}&apikey=${key}&hash=${hash}`);
            const stories = response.data.data.results.map(story => {
                const { id, title, thumbnail } = story;
                return { id, title, thumbnail };
            });

            dispatch(getAllStoriesSuccess(stories)); 
        } catch (error) {
            console.error('Error fetching stories:', error);
            dispatch(getAllStoriesFailure(error)); 
        }
    };
};

const getStoriesInfo = async (storyId) => {
    const response = await axios.get(`${url}stories/${storyId}?ts=${timestamp}&apikey=${key}&hash=${hash}`);
    return response.data.data.results[0];
};

const getCharacterByName = async (name) => {
    let response;
    if (!name) {
        response = await axios.get(`${url}characters?ts=${timestamp}&apikey=${key}&hash=${hash}`);
    } else {
        response = await axios.get(`${url}characters?nameStartsWith=${name}&ts=${timestamp}&apikey=${key}&hash=${hash}`);
    }
    return response.data.data.results;
};

const getComicByTitle = async (title) => {
    let response;
    if (!title) {
        response = await axios.get(`${url}comics?ts=${timestamp}&apikey=${key}&hash=${hash}`);
    } else {
        response = await axios.get(`${url}comics?titleStartsWith=${title}&ts=${timestamp}&apikey=${key}&hash=${hash}`);
    }
    return response.data.data.results;
};

const getSeriesByTitle = async (title) => {
    let response;
    if (!title) {
        response = await axios.get(`${url}series?ts=${timestamp}&apikey=${key}&hash=${hash}`);
    } else {
        response = await axios.get(`${url}series?titleStartsWith=${title}&ts=${timestamp}&apikey=${key}&hash=${hash}`);
    }
    return response.data.data.results;
};

export { 
    getAllCharacters, 
    getCharacterInfo, 
    getAllComics, 
    getComicInfo, 
    getAllSeries, 
    getSeriesInfo, 
    getAllStories, 
    getStoriesInfo, 
    getCharacterByName, 
    getComicByTitle,
    getSeriesByTitle
};