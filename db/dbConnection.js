import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/BookManager',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('DB is connected'))
    .catch((err)=>console.log('database err ',err));
}