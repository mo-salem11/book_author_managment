import { Auther } from "../../../db/models/auther.js";
import { catchError } from "../../middleware/catchError.js";



const createAuthor = catchError(async (req, res) => {
    const author = new Auther(req.body);
    const savedAuthor = await author.save();
    res.status(201).json(savedAuthor);
  });

  const getAllAuthors = catchError(async (req, res) => {
    const authors = await Auther.find({}).populate('books');;
    res.json(authors);
  });

 const getAuthorById = catchError(async (req, res) => {
    const author = await Auther.findById(req.params.id).populate('books');
    if (!author) {
      return res.status(404).json({ message: 'Cannot find author' });
    }
    res.json(author);
  });

const  updateAuthor = catchError(async (req, res) => {
    const author = await Auther.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!author) {
      return res.status(404).json({ message: 'Cannot find author' });
    }
    res.json(author);
  });

 const deleteAuthor = catchError(async (req, res) => {
    const author = await Auther.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ message: 'Cannot find author' });
    }
    res.json({ message: 'Deleted Author' });
  });

  export{
    createAuthor,
    getAllAuthors,
    getAuthorById,
    deleteAuthor,
    updateAuthor
  }