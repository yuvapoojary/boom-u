import axios from 'axios';

axios.defaults.baseURL = 'https://boominance.com/api';

export default axios.create({
  baseURL: 'https://boominance.com/api',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': true,
  },
});
