import Note from "../model/Note.js";
export async function  getAllNotes(_,res) {//here i replace req with and underscore _ as an arg
    try {
        const notes = await Note.find().sort({createdAt:-1});//Newest first it will sort in desc order
        res.status(200).send(notes);
    } catch (error) {

        console.error("Error in getAllnotes controller");
        res.status(500).json({message:"Internal server error"});
    }
};
export async function getNoteById(req,res){
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"})
        res.json(note);
    } catch (error) {
        console.error("Error in getNoteById notes controller");
        res.status(500).json({message:"Internal server error"});
    }
}
export async function  createNotes(req,res) {
    try {
        const {title,content} = req.body
        const note = new Note({title,content})
        
        const savedNote = await note.save()
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNotes controller");
        res.status(500).json({message:"Internal server error"});
    }
};
export async function  updateNotes(req,res) {
    try {
        const {title,content}= req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},
            {new:true}
        );

        if(!updatedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNotes controller");
        res.status(500).json({message:"Internal server error"});
    }
};
export async function deleteNotes(req,res) {    
    try {
        const {title,content} = req.body;

        const deletedNote = await Note.findByIdAndDelete(req.params.id,{title,content},
            {new : true}
        );
        if(!deletedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json(deletedNote);
    } catch (error) {
        console.error("Error in deleteNotes controller");
        res.status(500).json({message:"Internal server error"});
    }
};