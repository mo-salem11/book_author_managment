# 📚 Book and Author Management API

A simple Node.js and MongoDB application to manage a collection of books and authors. This API allows you to perform CRUD operations on books and authors, including features like pagination, filtering, and searching.

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
  - [Endpoints](#-endpoints)
  - [Testing with Postman](#-testing-with-postman)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- Create, Read, Update, and Delete (CRUD) operations for books and authors
- Pagination, filtering, and sorting of books and authors
- Full details of books included when retrieving authors

## 🛠️ Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/book-author-api.git
    cd book-author-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

    ```env
    MONGO_URI=mongodb://localhost:27017/book_author_db
    ```

4. Start the server:

    ```bash
    npm start
    ```

## 🚀 Usage

### 📚 Endpoints

- **Books**
  - `POST /api/books`: Create a new book
  - `GET /api/books`: Retrieve all books (with pagination, sorting, and filtering)
  - `GET /api/books/:id`: Retrieve a single book by its ID
  - `PATCH /api/books/:id`: Update a book by its ID
  - `DELETE /api/books/:id`: Delete a book by its ID

- **Authors**
  - `POST /api/authors`: Create a new author
  - `GET /api/authors`: Retrieve all authors (with pagination, seraching, sorting, and filtering)
  - `GET /api/authors/:id`: Retrieve a single author by its ID
  - `PATCH /api/authors/:id`: Update an author by its ID
  - `DELETE /api/authors/:id`: Delete an author by its ID

### 🧪 Testing with Postman

1. Open Postman.
2. Create a new collection and add requests to test the above endpoints.
3. Use the following example data for testing:

#### Create a Book

```json
{
  "title": "War and Peace",
  "content": "A novel by Leo Tolstoy.",
  "author": "Leo Tolstoy"
}
```


 #### Create an Author
 
```json
{
  "name": "Leo Tolstoy",
  "bio": "A Russian writer who is regarded as one of the greatest authors of all time.",
  "birthDate": "1828-09-09",
  "books": ["667d38ea79783c1cc101efa2", "667dc6d958155788215427d9"]
}
```

## 🗂️ Project Structure

book-author-api/
├── controllers/
│   ├── authorController.js
│   ├── bookController.js
├── models/
│   ├── Author.js
│   ├── Book.js
├── routes/
│   ├── authorRoutes.js
│   ├── bookRoutes.js
├── utils/
│   ├── apiFeatures.js
│   ├── appError.js
│   ├── catchError.js
├── .env
├── app.js
├── package.json
└── README.md

##🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to add.

Fork the repository.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a pull request.

