import { ADD_USER_RED, DELETE_USER_RED, GET_USER_RED, UPDATE_USER_RED } from "../Constants"
export function UserReducer(state = [], action) {
    switch (action.type) {
        case ADD_USER_RED:
            state.push(action.data)
            return state
        case GET_USER_RED:
            // console.log('reduce', action.data);
            return action.data

        case DELETE_USER_RED:
            var newState = state.filter((item) => item.id !== action.data.id)
            return newState
        case UPDATE_USER_RED:
            var index = state.findIndex((item) => item.id === Number(action.data.id))
            state[index].name = action.data.name
            //  console.log('reducer', state);
            return state
        default:
            return state
    }
}