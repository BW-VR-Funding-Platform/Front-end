import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchFundraisers = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("https://funding-platform-bw.herokuapp.com/funding")
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const postFundraisers = (fundraiser) => (dispatch) => {
  dispatch({ type: POST_START });
  axios
    .post("https://funding-platform-bw.herokuapp.com/funding", fundraiser)
    .then((res) => dispatch({ type: POST_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: POST_FAILURE, payload: err.response }));
};



export const DELETE_PROJECT = "DELETE_PROJECT";

export const deleteProject = (id) => (dispatch) => {
  dispatch({ DELETE_PROJECT })
  axiosWithAuth().delete(`https://bw-rw-funding.herokuapp.com/api/projects/${id}`, id)
    .then(res => {
      dispatch({ type: DELETE_PROJECT, payload: id })
    })
    .catch(err => {
      console.log(err)
    })
}

export const EDIT_PROJECT = "EDIT_PROJECT"

export const editProject = (id) => (dispatch) => {
  dispatch( { EDIT_PROJECT })
  axiosWithAuth().put(`https://bw-rw-funding.herokuapp.com/api/projects/${id}`, id)
  .then(res => {
    console.log(res)
    dispatch({ type: EDIT_PROJECT, payload: res.data })
  })
  .catch(err => {
    console.log(err)
  })
}