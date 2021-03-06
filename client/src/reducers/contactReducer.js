import { ADD_CONTACT } from '../actions/types';
const initialState ={
    contacts: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
}