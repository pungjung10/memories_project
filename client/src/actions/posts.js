import * as api from "../api"; //import everything from the api

//Action creators (Function that return action)

//working with asyn data => have to use Redux thunk (specify an additional arrow function)
export const getPosts = () => async (dispatch) => {
    
    try {
        //fetch all the data from the api
        const { data } = await api.fetchPosts();    //destructure the data(return from back-end)
  
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
  };