import express from "express";
import { createNotes, deleteNotes, getAllNotes, getNoteById, updateNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.post("/",createNotes);
router.put("/:id",updateNotes);
router.delete("/:id",deleteNotes);
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

export default router;