import axios from "axios";
import { GET_USER_ERRORS } from "./user.actions";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user`)
      .then((res) => {
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((err) => dispatch({ type: GET_USER_ERRORS, payload: err.message }));
  };
};
