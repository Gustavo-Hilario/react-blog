export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload;
        // We cannot return undefined from a reducer
        default:
            return state;
    }
};
