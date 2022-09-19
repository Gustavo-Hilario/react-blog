import jsonplaceholder from "../apis/jsonPlaceholder";

// Importing memoize function from Lodash to make sure fetchUsers won't make multiple requests
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // Await to get posts before continue with functions here
    await dispatch(fetchPosts());

    // Using Lodash to get unique user ID when mapping posts to get userIds
    /*  const userIds = _.uniq(_.map(getState().posts, "userId"));
    // console.log(userIds);
    userIds.forEach((id) => dispatch(fetchUser(id))); */

    _.chain(getState().posts)
        .map("userId")
        .uniq()
        .forEach((id) => dispatch(fetchUser(id)))
        .value(); /* simplification we can make with Lodash */
};

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonplaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
};

// We cannot memoize any of the functions here as a new request is made every time

/* export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
}); */
