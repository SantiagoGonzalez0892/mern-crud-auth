import axios from './axios';


export const createCategoryRequest = (values) => axios.post('/categories', values);

export const getCategoriesRequest = () => axios.get('/categories');
