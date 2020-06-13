import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_START,
  POST_SUCCESS,
  POST_FAILURE,
} from "../actions/index.js";

// 1) create initial state
const initialState = {
  smurfs: [],
  error: "",
  isFetching: false,
};

// 2) pass state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        smurf: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    case POST_START:
      return {
        ...state,
        isFetching: true,
        error: " ",
      };
    case POST_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: "",
      };
    case POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
// maybe works
