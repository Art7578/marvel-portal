import { GET_COMIC_INFO_REQUEST, GET_COMIC_INFO_SUCCESS, GET_COMIC_INFO_FAILURE } from '../actions/comicInfoActions';

const initialState = {
  comicInfo: null,
  loading: false,
  error: null,
};

const comicInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMIC_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COMIC_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        comicInfo: action.payload,
      };
    case GET_COMIC_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default comicInfoReducer;