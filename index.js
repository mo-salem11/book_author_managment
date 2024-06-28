import express from 'express'
import { dbConnection } from './db/dbConnection.js'
import booksRouter from './src/modules/books/books.routes.js'
import authorsRouter from './src/modules/authors/authors.routes.js'
const app = express()
const port = 3000

dbConnection()

app.use(express.json());

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);


app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
      status: err.status || 'error',
      message: err.message
    });
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))