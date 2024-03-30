import { getComicInfo } from "../../service";

export const GET_COMIC_INFO_REQUEST = 'GET_COMIC_INFO_REQUEST';
export const GET_COMIC_INFO_SUCCESS = 'GET_COMIC_INFO_SUCCESS';
export const GET_COMIC_INFO_FAILURE = 'GET_COMIC_INFO_FAILURE';

const getComicInfoRequest = () => ({
  type: GET_COMIC_INFO_REQUEST,
});

const getComicInfoSuccess = (comicInfo) => ({
  type: GET_COMIC_INFO_SUCCESS,
  payload: comicInfo,
});

const getComicInfoFailure = (error) => ({
  type: GET_COMIC_INFO_FAILURE,
  payload: error,
});

export const fetchComicInfo = (comicId) => {
  return async (dispatch) => {
    dispatch(getComicInfoRequest());
    try {
      const comicInfo = await getComicInfo(comicId);
      dispatch(getComicInfoSuccess(comicInfo));
    } catch (error) {
      dispatch(getComicInfoFailure(error));
    }
  };
};