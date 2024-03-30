import { getAllComics } from "../../service";

export const GET_ALL_COMICS_REQUEST = 'GET_ALL_COMICS_REQUEST';
export const GET_ALL_COMICS_SUCCESS = 'GET_ALL_COMICS_SUCCESS';
export const GET_ALL_COMICS_FAILURE = 'GET_ALL_COMICS_FAILURE';

export const getAllComicsRequest = () => ({
  type: GET_ALL_COMICS_REQUEST,
});

export const getAllComicsSuccess = (comics) => ({
  type: GET_ALL_COMICS_SUCCESS,
  payload: comics,
});

export const getAllComicsFailure = (error) => ({
  type: GET_ALL_COMICS_FAILURE,
  payload: error,
});

export const fetchAllComics = (offset) => {
  return async (dispatch) => { 
    try {
      const comics = await getAllComics(offset);
      dispatch(getAllComicsSuccess(comics));
    } catch (error) {
      dispatch(getAllComicsFailure(error));
    }
  };
};