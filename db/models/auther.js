import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: String,
    birthDate: Date,
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
  });
  
  export let Auther=mongoose.model('Auther',authorSchema);