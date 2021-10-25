import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux"; //import Hook (dispatch an action)

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import memories from "./images/memories.png";

const App = () =>{
    const classes = useStyles();
    const dispatch = useDispatch(); //hook

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </AppBar>
            {/* simple animation */}
            <Grow in> 
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        {/* 12 => Full width on small devices */}
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )

}
export default App;