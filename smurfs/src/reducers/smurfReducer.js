/*
  Be sure to import in all of the action types from `../actions`
*/
import {
    FETCHING_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADDING_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_ERROR
}
 from '../actions';

const initialState = {
    loadingSmurfs: false,
    addingSmurf: false,
    smurfs: [],
    error: null
  }

  export const smurfReducer = (state = initialState, action) =>{
    console.log('reducer', action)
    switch(action.type){
        case FETCHING_DATA:
        return{
            ...state,
            error: '',
            loadingSmurfs: true
        };
        case FETCH_DATA_SUCCESS:
        console.log(action.payload)
        return{
          ...state,
          loadingSmurfs: false,
          smurfs: [...state.smurfs, ...action.payload]
        };
        case FETCH_DATA_FAILURE:
        return{
          ...state,
          isLoading: false,
          error: action.payload
        };
        case ADDING_SMURF:
        return{
          ...state,
          addingSmurf: true,
          error: null
        };
        case ADD_SMURF_SUCCESS:
        return{
          ...state,
          smurfs: action.payload,
          addingSmurf: false
        }
        case ADD_SMURF_ERROR:
        return{
          ...state,
          addingSmurf: false,
          error: action.payload
        }
        default:
        return state;
    }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/