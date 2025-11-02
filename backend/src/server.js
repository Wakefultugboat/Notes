import dotenv from "dotenv";
dotenv.config();

import express from "express";
import notesRoutes from "./routes/notesroutes.js";//if type: module in json file
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"


//const express = require("express")
const app = express();
const PORT = process.env.PORT || 5001


//middleware
app.use(cors({
    origin:"http://localhost:5174",
    credentials: true
}));
app.use(express.json());
app.use(rateLimiter);

//This middleware will parse JSON bodies:req.body
//use a callback function
//our simple custom middleware
// app.use((req,res,next) =>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);


// app.get("/api/notes",(req,res) => {
//     //send the notes
//     res.status(200).send("you got 20 notes");//route
// });

// app.post("/api/notes",(req,res) =>{
//     res.status(201).json({message:"post create success)"})
// });

// app.put("/api/notes/:id",(req,res) =>{//update the post
//     res.status(200).json({message:"post update success)"})
// });
// app.delete("/api/notes/:id",(req,res) =>{//delete the post
//     res.status(200).json({message:"post delete success)"})
// });
connectDB().then(() =>{
app.listen(PORT,() => {
    console.log("Server started on PORT:",PORT);
});
});

