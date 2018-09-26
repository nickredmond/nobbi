export const getRandomPosts = (count) => {
    const postUrl = `${process.env.REACT_APP_POST_SERVICE_BASE_URL}/posts/random?count=${count}`;
    return fetch(postUrl)
        .then((response) => response.json());
}