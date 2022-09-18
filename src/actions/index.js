import jsonplaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
    const promise = await jsonplaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: promise });
};
