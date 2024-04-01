import { GET_ALL_STORIES_REQUEST, GET_ALL_STORIES_SUCCESS, GET_ALL_STORIES_FAILURE } from '../actions/storiesActions';

const initialState = {
  stories: [],
  loading: false,
  error: null,
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_STORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        stories: action.payload,
      };
    case GET_ALL_STORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default storiesReducer;