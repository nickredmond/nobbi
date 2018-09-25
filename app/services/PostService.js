export const getPostById = (postId) => {
    const postUrl = `https://us-east-1.amazonaws.com/[somegatewayID]/post/${postId}`;
    return fetch(postUrl)
        .then((response) => response.json());
}