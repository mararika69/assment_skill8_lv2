import axiosInstance from "../utils/axiosInstance";
import handleRequest from "../utils/request";

// Get Books
const getBooks = async () => await handleRequest(axiosInstance.get('/api/books'));

// Get Book
const getBook = async (id) => await handleRequest(axiosInstance.get(`/api/books/${id}`));

// Create Book
const createBook = async (data) => await handleRequest(axiosInstance.post('/api/books', data));

// Update Book
const updateBook = async (id, data) => await handleRequest(axiosInstance.put(`/api/books/${id}`, data));

// Delete Book
const deleteBook = async (id) => await handleRequest(axiosInstance.delete(`/api/books/${id}`));

export {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
