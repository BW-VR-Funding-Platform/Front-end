import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const DELETE_PROJECT = "DELETE_PROJECT";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchFundraisers = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("https://bw-rw-funding.herokuapp.com/api/fundraisers")
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const postFundraisers = (fundraiser) => (dispatch) => {
  dispatch({ type: POST_START });
  axios
    .post("https://bw-rw-funding.herokuapp.com/api/fundraisers", fundraiser)
    .then((res) => dispatch({ type: POST_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: POST_FAILURE, payload: err.response }));
};

export const deleteProject = (id) => (dispatch) => {
  dispatch({ DELETE_PROJECT })
  axiosWithAuth().delete(`https://bw-rw-funding.herokuapp.com/api/project/${id}`)
  .then(res => {
    dispatch({ type: DELETE_PROJECT, payload: id })
  })
  .catch(err => {
    console.log(err)
  })
}