import { FETCH_SURVEYS } from "../actions/type";

const initialState = [];

export default function surveysReducers(state = initialState, action) {
    switch(action.type) {
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
}