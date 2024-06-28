import { Book } from "../../../db/models/book.js"
import { catchError } from "../../middleware/catchError.js";
import { apiFeatures } from "../../utls/apiFeatures.js";


const createNewBook=catchError(
    async(req,res,next)=>{
        const book=new Book(req.body);
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    }
    
)
const getAllBooks=catchError(
    async(req,res,next)=>{
        let apiFeature =new apiFeatures(Book.find({}),req.query).fields().pagination().sort().filter().search('title', 'description');
        let books = await apiFeature.mongooseQuery;
        !books && next(new appError('Books not found', 404));
        books && res.send({ message: 'success', page: apiFeature.pageNumber, books })
    }
)
const getSingleBook = catchError(async (req, res, next)=>{
    let book = await Book.findById(req.params.id);
    !book && next(new appError("book not found :", 404))
    book && res.json({message:"Success", book})
})
const updateBook = catchError(async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) {
      return res.status(404).json({ message: 'Cannot find book' });
    }
    res.json(book);
  });
const deleteBook=catchError( async (req, res, next)=>{
    let document = await Book.findByIdAndDelete(req.params.id)
    !document && next(new appError("Book not found :", 404))
    document && res.json({message:"Success", document})  
});
export{
    createNewBook,
    getAllBooks,
    getSingleBook,
    deleteBook,
    updateBook
}