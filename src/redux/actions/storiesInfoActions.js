import { getStoriesInfo } from "../../service";

export const GET_STORIES_INFO_REQUEST = 'GET_STORIES_INFO_REQUEST';
export const GET_STORIES_INFO_SUCCESS = 'GET_STORIES_INFO_SUCCESS';
export const GET_STORIES_INFO_FAILURE = 'GET_STORIES_INFO_FAILURE';

const getStoriesInfoRequest = () => ({
  type: GET_STORIES_INFO_REQUEST,
});

const getStoriesInfoSuccess = (storiesInfo) => ({
  type: GET_STORIES_INFO_SUCCESS,
  payload: storiesInfo,
});

const getStoriesInfoFailure = (error) => ({
  type: GET_STORIES_INFO_FAILURE,
  payload: error,
});

// Async action creator
export const fetchStoriesInfo = (storyId) => {
  return async (dispatch) => {
    dispatch(getStoriesInfoRequest());
    try {
      const storiesInfo = await getStoriesInfo(storyId);
      dispatch(getStoriesInfoSuccess(storiesInfo));
    } catch (error) {
      dispatch(getStoriesInfoFailure(error));
    }
  };
};