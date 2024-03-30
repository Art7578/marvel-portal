import { GET_ALL_COMICS_REQUEST, GET_ALL_COMICS_SUCCESS, GET_ALL_COMICS_FAILURE } from '../actions/comicsActions';

const initialState = {
  comics: [],
  loading: false,
  error: null,
};

const comicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COMICS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_COMICS_SUCCESS:
      return {
        ...state,
        loading: false,
        comics: action.payload,
      };
    case GET_ALL_COMICS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default comicsReducer;