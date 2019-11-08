import axios from 'axios';

export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILED = "FETCH_SMURFS_FAILED";

export const ADD_SMURF_LOADING = "ADD_SMURF_LOADING";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED";

export const addSmurfLoading = () => ({ type: ADD_SMURF_LOADING });
export const addSmurfSuccess = data => ({
    type: ADD_SMURF_SUCCESS,
    payload: data
});
export const addSmurfFailed = error => ({
    type: ADD_SMURF_FAILED,
    payload: error
});

export const smurfLoading = () => ({ type: FETCH_SMURFS_LOADING });
export const smurfLoadSuccess = data => ({
    type: FETCH_SMURFS_SUCCESS,
    payload: data
});

export const smurfLoadFailed = error => ({
    type: FETCH_SMURFS_FAILED,
    payload: error
});

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_LOADING });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('rizzy', res.data)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({ type: FETCH_SMURFS_FAILED, payload: err}));
};

export const addSmurf = (newSmurf) => (dispatch) => {
    dispatch({ type: ADD_SMURF_LOADING });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log('post', res)
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({ type: ADD_SMURF_FAILED, payload: err}));
};