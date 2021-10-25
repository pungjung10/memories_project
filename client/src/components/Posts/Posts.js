import React from "react";
import { useSelector } from "react-redux"; //fetgh the data from the global redux store

import Post from "./Post/Post";
import useStyles from "./styles";
    

const Posts = () => {
    //initialize it as a hook
    const posts = useSelector((state) => state.posts); //get access to that whole global redux store or state then return state.posts(in reducer has posts)    
    const classes = useStyles();

    console.log(posts);
    return(
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;