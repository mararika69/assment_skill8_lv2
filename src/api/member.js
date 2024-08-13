import axiosInstance from "../utils/axiosInstance";
import handleRequest from "../utils/request";

// Get Members
const getMembers = () => handleRequest(axiosInstance.get('/api/members'));

// Get Member
const getMember = (id) => handleRequest(axiosInstance.get(`/api/members/${id}`));

// Create Member
const createMember = (data) => handleRequest(axiosInstance.post('/api/members', data));

// Update Member
const updateMember = (id, data) => handleRequest(axiosInstance.put(`/api/members/${id}`, data));

// Delete Member
const deleteMember = (id) => handleRequest(axiosInstance.delete(`/api/members/${id}`));

export {
  getMembers,
  getMember,
  createMember,
  updateMember,
  deleteMember,
};
