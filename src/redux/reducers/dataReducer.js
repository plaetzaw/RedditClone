import { GET_SUBREDDIT_DATA } from '../actions/actionTypes'

const initialState = {
    subredditLoaded: false,
    subredditData: [],
}

const dataReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBREDDIT_DATA:
        return {
            ...state,
            subredditLoaded: true,
            subredditData: action.payload
        }
        default:
        return state;
    }
}

export default dataReducers;