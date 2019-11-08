import {
    FETCH_SMURFS_LOADING,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILED
} from '../actions';

const initialState = {
    smurfs: [],
    error: null,
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_SMURFS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };

        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                isFetching: false,
                error: null
            };

        case FETCH_SMURFS_FAILED:
            return {
                ...state,
                list: [],
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer