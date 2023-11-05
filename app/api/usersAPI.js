import axios from 'axios';

const API_BASE_URL = 'http://tu-direccion-del-backend.com'; // Reemplaza con la URL de tu backend

// Crea una instancia personalizada de Axios
const usersAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Otros encabezados personalizados que desees configurar
  },
});