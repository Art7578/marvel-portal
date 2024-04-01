import { GET_ALL_SERIES_REQUEST, GET_ALL_SERIES_SUCCESS, GET_ALL_SERIES_FAILURE } from '../actions/seriesActions';

const initialState = {
  series: [],
  loading: false,
  error: null,
};

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_SERIES_SUCCESS:
      return {
        ...state,
        loading: false,
        series: action.payload,
      };
    case GET_ALL_SERIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default seriesReducer;