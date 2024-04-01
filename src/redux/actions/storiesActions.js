import { getAllStories } from "../../service";

export const GET_ALL_STORIES_REQUEST = 'GET_ALL_STORIES_REQUEST';
export const GET_ALL_STORIES_SUCCESS = 'GET_ALL_STORIES_SUCCESS';
export const GET_ALL_STORIES_FAILURE = 'GET_ALL_STORIES_FAILURE';

export const getAllStoriesRequest = () => ({
  type: GET_ALL_STORIES_REQUEST,
});

export const getAllStoriesSuccess = (stories) => ({
  type: GET_ALL_STORIES_SUCCESS,
  payload: stories,
});

export const getAllStoriesFailure = (error) => ({
  type: GET_ALL_STORIES_FAILURE,
  payload: error,
});

export const fetchAllStories = (offset) => {
  return async (dispatch) => { 
    dispatch(getAllStoriesRequest());
    try {
      const stories = await getAllStories(offset);
      dispatch(getAllStoriesSuccess(stories));
    } catch (error) {
      dispatch(getAllStoriesFailure(error));
    }
  };
};