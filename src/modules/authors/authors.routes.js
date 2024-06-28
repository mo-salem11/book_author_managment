import { Router } from 'express';
const authorsRouter = Router();
import { createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor } from './authors.controller.js';

authorsRouter.post('/', createAuthor);
authorsRouter.get('/', getAllAuthors);
authorsRouter.get('/:id', getAuthorById);
authorsRouter.patch('/:id', updateAuthor);
authorsRouter.delete('/:id', deleteAuthor);

export default authorsRouter;
