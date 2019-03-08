import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const getData = () => dispatch =>{
  dispatch ({ type: FETCHING_DATA });
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    dispatch ({ type: FETCH_DATA_SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({ type: FETCH_DATA_FAILURE, payload: err})
  })
}

export const ADDING_SMURF = 'ADDING_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'

export const addSmurf = (newSmurf) => dispatch => { 
  dispatch({ type: ADDING_SMURF});      
  axios
  .post('http://localhost:3333/smurfs', newSmurf)
  .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS,
      payload: res.data})
  })
  .catch(err => {
      dispatch({ type: ADD_SMURF_ERROR,
      payload: err})
  })
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
