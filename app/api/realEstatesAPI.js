import axios from 'axios';

const API_BASE_URL = 'http://3.17.181.224:8080'; // Reemplaza con la URL de tu backend

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
    console.log('Error signing in real estate:', error);
    return null; // Retornar null en caso de error
  }
};

export const logInRealEstate = async (realEstateData) => {
  try {
    const response = await realEstatesAPI.post('/auths/login', realEstateData);
    return response.data;
  } catch (error) {
    console.log('Error logging in real estate:', error);
    return null; // Retornar null en caso de error
  }
};
