import axios from './axios';


export const createTaskRequest = (values) => axios.post('/tasks', values);

export const getTasksRequest = () => axios.get('/tasks');

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);

export const editTaskRequest = (id, values) => axios.put(`/tasks/${id}`, values);

export const doneTaskRequest = (id, done) => axios.put(`/tasks/${id}/done`, done);
