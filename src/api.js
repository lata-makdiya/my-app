import axios from 'axios';

const api = axios.create({ baseURL: 'http://127.0.0.1:8000/api' });

export const fetchUsers = () => api.get('/users');
export const createUser = (user) => api.post('/users', user);
export const updateUser = (id, user) => api.put(`/users/${id}`, user)
export const deleteUser = (id) => api.delete(`/users/${id}`);
