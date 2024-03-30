import { GET_CHARACTER_INFO_REQUEST, GET_CHARACTER_INFO_SUCCESS, GET_CHARACTER_INFO_FAILURE } from '../actions/characterInfoActions';

const initialState = {
  characterInfo: null,
  loading: false,
  error: null,
};

const characterInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CHARACTER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        characterInfo: action.payload,
      };
    case GET_CHARACTER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default characterInfoReducer;