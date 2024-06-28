import { Router } from 'express';
import { createNewBook, deleteBook, getAllBooks, getSingleBook, updateBook } from './books.controller.js';
const booksRouter = Router();


booksRouter.post('/', createNewBook);
booksRouter.get('/', getAllBooks);
booksRouter.get('/:id', getSingleBook);
booksRouter.patch('/:id', updateBook);
booksRouter.delete('/:id', deleteBook);

export default booksRouter;
