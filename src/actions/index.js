import jsonplaceholder from "../apis/jsonPlaceholder";

// Importing memoize function from Lodash to make sure fetchUsers won't make multiple requests
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonplaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// We cannot memoize any of the functions here as a new request is made every time
export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
});
