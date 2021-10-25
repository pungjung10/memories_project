import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) =>{
    //if everything sucessful
    try {
        //finding something take time => asynchronous action
        const postMessages = await PostMessage.find(); 

        //res.status(200) => everything OK
        res.status(200).json(postMessages);
    } 
    //if get an error
    catch (error) {              
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) =>{
    // const { title, message, selectedFile, creator, tags } = req.body;
    const post = req.body;
    const newPost = new PostMessage();
//   const newPostMessage = new PostMessage({
//     title,
//     message,
//     selectedFile,
//     creator,
//     tags,
//   });

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
