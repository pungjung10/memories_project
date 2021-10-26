import axios from "axios";

const url = "https://localhost:5000/posts";

//all actions towards backend are going to be done using redux (import at index.js)
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);