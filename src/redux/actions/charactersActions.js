import { getAllCharacters } from "../../service";

export const GET_ALL_CHARACTERS_REQUEST = 'GET_ALL_CHARACTERS_REQUEST';
export const GET_ALL_CHARACTERS_SUCCESS = 'GET_ALL_CHARACTERS_SUCCESS';
export const GET_ALL_CHARACTERS_FAILURE = 'GET_ALL_CHARACTERS_FAILURE';

export const getAllCharactersRequest = () => ({
  type: GET_ALL_CHARACTERS_REQUEST,
});

export const getAllCharactersSuccess = (characters) => ({
  type: GET_ALL_CHARACTERS_SUCCESS,
  payload: characters,
});

export const getAllCharactersFailure = (error) => ({
  type: GET_ALL_CHARACTERS_FAILURE,
  payload: error,
});

export const fetchAllCharacters = (offset) => {
  return async (dispatch) => { // Возвращаем функцию, которая принимает dispatch
    dispatch(getAllCharactersRequest());
    try {
      const characters = await getAllCharacters(offset);
      dispatch(getAllCharactersSuccess(characters));
    } catch (error) {
      dispatch(getAllCharactersFailure(error));
    }
  };
};
