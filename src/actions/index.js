import jsonplaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
    // BAD APPROACH --
    // Async Await return other values that cause this issue
    // API requests is also and issues as there is not way to pause the Redux cycle (reducers and others)
    /* const response = await jsonplaceholder.get("/posts", {});

    return {
        type: "FECTH_POSTS",
        payload: response,
    }; */
};
