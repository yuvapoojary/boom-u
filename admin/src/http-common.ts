import axios from 'axios';

axios.defaults.baseURL = '/api';

export default axios.create({
  baseURL: '/api',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': true,
  },
});
