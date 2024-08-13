import axiosInstance from "../utils/axiosInstance";
import handleRequest from "../utils/request";
import moment from 'moment';

// Get BookIssues
const getBookIssues = async () => {
  const response = await handleRequest(axiosInstance.get('/api/book_issues'));
  const data = response.map(d => {
    return {
      id: d.id,
      isbn: d.book.isbn,
      title: d.book.title,
      member: d.member.fullname,
      librarian: d.processed_by.username,
      issue_date: moment(d.issue_date).format('DD-MMM-YYYY'),
      due_date: moment(d.due_date).format('DD-MMM-YYYY'),
      return_date: moment(d.return_date).format('DD-MMM-YYYY'),
      status: d.status.name
    }
  });

  return data;
}

// Get BookIssue
const getBookIssue = async (id) => await handleRequest(axiosInstance.get(`/api/book_issues/${id}`));

// Create BookIssue
const createBookIssue = async (data) => await handleRequest(axiosInstance.post('/api/book_issues', data));

// Update BookIssue
const updateBookIssue = async (id, data) => await handleRequest(axiosInstance.put(`/api/book_issues/${id}`, data));

// Delete BookIssue
const deleteBookIssue = async (id) => await handleRequest(axiosInstance.delete(`/api/book_issues/${id}`));

export {
  getBookIssues,
  getBookIssue,
  createBookIssue,
  updateBookIssue,
  deleteBookIssue,
};
