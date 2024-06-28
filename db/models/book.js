import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now }
})

export let Book=mongoose.model('Book',bookSchema);