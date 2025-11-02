import mongoose from "mongoose";
//create a schema 
//model of that schema
const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    content:{
        type:String,
        required:true,
    }
},{timestamps:true}// createdAt,updateat
);

const Note = new mongoose.model("Note",noteSchema);

export default Note