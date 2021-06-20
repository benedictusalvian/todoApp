const positionReducer = (state = {x: 0, y: 0}, action) => {
    switch(action.type) {
        case 'UPDATEPOSITION':
            return action.payload;
        default:
            return state;
    }
};

export default positionReducer;