import axios from "axios";

export const FETCH_START = "FETCH_DATA_START";
export const FETCH_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_FAILURE = "FETCH_DATA_FAILURE";
export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
        // console.log(res.data)
      dispatch({ type: FETCH_SUCCESS, 
        payload: res.data });
    })
    .catch((err) =>
    //   console.log(err.response);
      dispatch({
        type: FETCH_FAILURE,
        payload: err.response,
      }));
};

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";
export const postSmurf = (smurf) => (dispatch) => {
  dispatch({ type: POST_START });
  
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
    //   console.log("Post", res);
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
    //   console.log(err);
      dispatch({ type: POST_FAILURE, payload: err.response });
    });
};