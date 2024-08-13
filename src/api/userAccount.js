import axiosInstance from "../utils/axiosInstance";
import handleRequest from "../utils/request";

// Get UserAccounts
const getUserAccounts = async () => {
  const response = await handleRequest(axiosInstance.get('/api/user_accounts'));
console.log("res", response);
  const data = response.map(d => {
    d.user_role = d.user_role.user_role_name
    d.is_activated = d.is_activated ? 'True' : 'False'
    d.is_active = d.is_active ? 'True' : 'False'
    return d;
  })

  return data;
}
// Get UserAccount
const getUserAccount = async (id) => handleRequest(axiosInstance.get(`/api/user_accounts/${id}`));

// Create UserAccount
const createUserAccount = async (data) => handleRequest(axiosInstance.post('/api/user_accounts', data));

// Update UserAccount
const updateUserAccount = async (id, data) => handleRequest(axiosInstance.put(`/api/user_accounts/${id}`, data));

// Delete UserAccount
const deleteUserAccount = async (id) => handleRequest(axiosInstance.delete(`/api/user_accounts/${id}`));

export {
  getUserAccounts,
  getUserAccount,
  createUserAccount,
  updateUserAccount,
  deleteUserAccount,
};
