const roomsInitialState = []

const roomsGetReducer = (state = roomsInitialState, action) => {
    switch(action.type) {
        case 'SET_ROOMS' : {
            return [].concat(action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}
export default roomsGetReducer