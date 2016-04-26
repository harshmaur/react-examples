import {FETCH_WEATHER} from '../actions/index'

// Never mutate state

export default function(state=[], action){
    switch (action.type) {
        case FETCH_WEATHER:
            // instead of mutating, concat will create a new array
            // return state.contact([action.payload.data]);
            // or ES6 syntax
            return [action.payload.data, ...state];
    }
    return state
}
