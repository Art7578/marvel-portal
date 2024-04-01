import { GET_SERIES_INFO_REQUEST, GET_SERIES_INFO_SUCCESS, GET_SERIES_INFO_FAILURE } from '../actions/seriesInfoActions';

const initialState = {
  seriesInfo: null,
  loading: false,
  error: null,
};

const seriesInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERIES_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_SERIES_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        seriesInfo: action.payload,
      };
    case GET_SERIES_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default seriesInfoReducer;