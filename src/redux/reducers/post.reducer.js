import * as types from "../constants/post.constanst";

const initialState = {
  post: [],
  loading: false,
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_POST_REQUEST:
      return { ...state, loading: true };
    case types.GET_POST_SUCCESS:
      return { ...state, post: payload, loading: false };
    case types.GET_POST_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default postReducer;
