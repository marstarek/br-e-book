
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function to display toast notifications based on the type of message
const showToast = (message, type = 'info') => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 10000, // Set a global timeout of 10 seconds
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    showToast('Request failed', 'error');
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Assuming the server sends a status code indicating success
    if (response.status === 200) {
      showToast('Success!', 'success');
    }
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access specifically
      showToast('Unauthorized Access', 'error');
    } else {
      showToast('An error occurred', 'error');
    }
    return Promise.reject(error);
  }
);

