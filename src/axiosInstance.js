// axiosInstance.js (or wherever axios is configured)
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Adjust your API base URL here
});

export default axiosInstance;

