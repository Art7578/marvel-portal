import { GET_ALL_CHARACTERS_REQUEST, GET_ALL_CHARACTERS_SUCCESS, GET_ALL_CHARACTERS_FAILURE } from '../actions/charactersActions';

const initialState = {
  characters: [],
  loading: false,
  error: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        characters: action.payload,
      };
    case GET_ALL_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;