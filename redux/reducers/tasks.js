const tasksReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCHDATASUCCESS':
            const data = action.payload.map(
                ({
                    id,
                    title,
                    body,
                }) => ({
                    key: String(id),
                    title: title,
                    body: body,
                })
            );
            return data;
        default:
            return state;
    }
};

export default tasksReducer;