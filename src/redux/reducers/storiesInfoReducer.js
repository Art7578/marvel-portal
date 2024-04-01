import { GET_STORIES_INFO_REQUEST, GET_STORIES_INFO_SUCCESS, GET_STORIES_INFO_FAILURE } from '../actions/storiesInfoActions';

const initialState = {
  storiesInfo: null,
  loading: false,
  error: null,
};

const storiesInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_STORIES_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        storiesInfo: action.payload,
      };
    case GET_STORIES_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default storiesInfoReducer;