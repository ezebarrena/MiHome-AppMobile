import axios from 'axios';

const API_BASE_URL = 'http://3.17.181.224:8080'; // Reemplaza con la URL de tu backend

// Crea una instancia personalizada de Axios
const usersAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Otros encabezados personalizados que desees configurar
  },
});