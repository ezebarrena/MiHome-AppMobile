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


export const getUser = async () => {
  try {
    const response = await usersAPI.get('/users/me/');
    return response.data;
  } catch (error) {
    console.error('Error getting user', error);
    throw error;
  }
};

export const favAnAsset = async (userId, assetId) => {
  try {
    const response = await usersAPI.post('/users/me/favorite', {
      data: { id: assetId, user:userId },
    });
    return response.data;
  } catch (error) {
    console.error('Error faving asset', error);
    throw error;
  }
};

export const unFavAnAsset = async (userId, assetId) => {
  try {
    const response = await usersAPI.post('/users/me/unfavorite', {
      data: { id: assetId, user:userId },
    });
    return response.data;
  } catch (error) {
    console.error('Error unfaving asset', error);
    throw error;
  }
};

export const getMyFavouriteAssets = async (userId) => {
  try {
    const response = await usersAPI.get('/users/me/favorite', {
      data: { user:userId },
    });

export const addPaymentMethod = async (userId, paymentMethod) => {
  try {
    const response = await usersAPI.post('users/me/paymentmethod', { userId, paymentMethod });

    return response.data;
  } catch (error) {
    console.error('Error adding payment method:', error);
    throw error;
  }
};

export const deletePaymentMethod = async (userId, paymentMethod) => {
  try {
    const response = await usersAPI.post('/users/me/paymentmethod', {
      data: { user:userId, paymentMethod },
    });

    const response = await usersAPI.delete('users/me/paymentmethod', { userId, paymentMethod });

    return response.data;
  } catch (error) {
    console.error('Error adding payment method:', error);
    throw error;
  }
};

export const getPaymentMethods = async (userId) => {
  try {

    const response = await usersAPI.delete('/users/me/paymentmethod', {
      data: { user:userId, paymentMethod },
    });

    const response = await usersAPI.get(`users/${userId}/paymentmethod`);

    return response.data;
  } catch (error) {
    console.error('Error getting payment methods:', error);
    throw error;
  }
};