import axios from 'axios';
import { t } from 'i18n-js';

const API_BASE_URL = 'http://18.218.245.250:8080/'; // Reemplaza con la URL de tu backend

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

export const getRealEstateID = async (realEstateId) => {
  try {
    const response = await realEstatesAPI.post('/realEstate/id', { _id: realEstateId });
    return response.data;
  } catch (error) {
    console.error('Error signing in real estate:', error);
    throw error;
  }
};

export const sendCode = async (email) => {
  try {
    const response = await realEstatesAPI.post('/resetPassword', { email });
    return response.data;
  } catch (error) {
    console.error('Error sending code:', error);
    throw error;
  }
};

export const validateCode = async (token) => {
  try {
    const response = await realEstatesAPI.post('/resetPassword/validate', { token });
    return response.data;
  } catch (error) {
    console.error('Error validating code:', error);
    throw error;
  }
};

export const resetPassword = async (email, password) => {
  try {
    const response = await realEstatesAPI.post('/resetPassword/renewPassword', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error validating code:', error);
    throw error;
  }
};

export const deleteRealEstate = async (reId) => {
  try {
    console.log(reId, "reId");
    const response =await realEstatesAPI.delete('/realEstate/me', {reId: reId });
    
    return response.data;
  } catch (error) {
    console.error('Error deleting real estate:', error);
    throw error;
  }
};


