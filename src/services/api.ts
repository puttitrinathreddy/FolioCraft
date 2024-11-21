import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-base-url.com/api', // Replace with your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
