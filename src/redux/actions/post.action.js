import { toast } from "react-toastify";
import * as types from "../constants/post.constanst";
import api from "../../apiService";

const getPost = () => async (dispatch) => {
  dispatch({ type: types.GET_POST_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}api/posts`;
    const data = await api.get(url);
    console.log("this data", data);
    dispatch({
      type: types.GET_POST_SUCCESS,
      payload: data.data.post,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_POST_FAILURE, payload: error });
  }
};

const postActions = { getPost };
export default postActions;
