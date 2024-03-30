import { getCharacterInfo } from "../../service";

export const GET_CHARACTER_INFO_REQUEST = 'GET_CHARACTER_INFO_REQUEST';
export const GET_CHARACTER_INFO_SUCCESS = 'GET_CHARACTER_INFO_SUCCESS';
export const GET_CHARACTER_INFO_FAILURE = 'GET_CHARACTER_INFO_FAILURE';

const getCharacterInfoRequest = () => ({
  type: GET_CHARACTER_INFO_REQUEST,
});

const getCharacterInfoSuccess = (characterInfo) => ({
  type: GET_CHARACTER_INFO_SUCCESS,
  payload: characterInfo,
});

const getCharacterInfoFailure = (error) => ({
  type: GET_CHARACTER_INFO_FAILURE,
  payload: error,
});

export const fetchCharacterInfo = (characterId) => {
  return async (dispatch) => {
    dispatch(getCharacterInfoRequest());
    try {
      const characterInfo = await getCharacterInfo(characterId);
      dispatch(getCharacterInfoSuccess(characterInfo));
    } catch (error) {
      dispatch(getCharacterInfoFailure(error));
    }
  };
};