import axios from 'axios';

const API_BASE_URL = 'http://18.218.245.250:8080'; // Reemplaza con la URL de tu backend

// Crea una instancia personalizada de Axios
const usersAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Otros encabezados personalizados que desees configurar
  },
});

export const addPaymentMethod = async (userId, paymentMethod) => {
  try {
    const response = await usersAPI.post('/users/me/paymentmethod', { userId, paymentMethod });
    return response.data;
  } catch (error) {
    console.error('Error adding payment method:', error);
    throw error;
  }
};

export const deletePaymentMethod = async (userId, paymentMethod) => {
  try {
    const response = await usersAPI.delete('/users/me/paymentmethod', { userId, paymentMethod });
    return response.data;
  } catch (error) {
    console.error('Error adding payment method:', error);
    throw error;
  }
};

export const getPaymentMethods = async (userId) => {
  try {
    console.log('userId', userId);
    const _id = userId;
    const response = await usersAPI.get(`/users/me/id`, { _id });
    return response.data;
  } catch (error) {
    console.error('Error getting payment methods:', error);
    throw error;
  }
};