import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const From = () => {

    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    //when click the submit button
    const handleSubmit = (e) => {
        e.preventDefault(); //not to get the refresh in the browser
    
        dispatch(createPost(postData));
        // if (currentId === 0) {
        //   dispatch(createPost(postData));
        //   clear();
        // } else {
        //   dispatch(updatePost(currentId, postData));
        //   clear();
        // }
    };//-> go to reducer

    const clear = () => {
        // setCurrentId(0);
        // setPostData({
        //   creator: "",
        //   title: "",
        //   message: "",
        //   tags: "",
        //   selectedFile: "",
        // });
    };

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {/* {currentId ? `Editing "${post.title}"` : "Creating a Memory"} */}
                    Creating a Memory
                </Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator} //store whole data in the post (hook)
                    onChange={(e) =>setPostData({ ...postData, creator: e.target.value })} //change value of that state
                    //all the data is going to persist while changing only specific property of that specific text field
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (coma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}
                    />
                {/* input */}
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
}

export default From;