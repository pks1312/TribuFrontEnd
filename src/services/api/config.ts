import axios from 'axios';

// URL base del backend API
// La variable VITE_API_URL debe apuntar a la raíz del backend (sin /api)
// Ejemplo: http://localhost:8000 o https://tunombre.pythonanywhere.com
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const API_URL = `${BASE_URL}/api`;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true, // Para enviar cookies de sesión
});

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export { API_URL, BASE_URL };
export default api;

