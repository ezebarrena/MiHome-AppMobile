import axios from 'axios';

const API_BASE_URL = 'http://tu-direccion-del-backend.com'; // Reemplaza con la URL de tu backend

// Crea una instancia personalizada de Axios
const realEstatesAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Otros encabezados personalizados que desees configurar
  },
});

export const signInRealEstate = async (realEstateData) => {
  try {
    const response = await realEstatesAPI.post('/auths', realEstateData);
    return response.data;
  } catch (error) {
    console.error('Error signing in real estate:', error);
    throw error;
  }
};

export const logInRealEstate = async (realEstateData) => {
  try {
    const response = await realEstatesAPI.post('/auths/l', realEstateData);
    return response.data;
  } catch (error) {
    console.error('Error logging in real estate:', error);
    throw error;
  }
};

