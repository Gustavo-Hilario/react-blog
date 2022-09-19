export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_USER":
            // New User information to add to the state.
            return [...state, action.payload];
        default:
            return state;
    }
};
