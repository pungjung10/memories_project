import express from "express";
import bodyParser from "body-parser"; //read data from client POST
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js"; //import router

//can use import systex by adding "type": "module", in package.json file
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true })); //sending some img which can be large in size
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello to Memories API");
// });

const CONNECTION_URL =
  "mongodb+srv://memoriesProject:memoriesProject@cluster0.s3vgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify',false);