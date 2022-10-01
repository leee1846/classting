import axios from 'axios';

const api = axios.create({
  baseURL: 'https://opentdb.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export default api;
