import axios from 'axios';

const API_BASE_URL = 'http://18.218.245.250:8080/'; // Reemplaza con la URL de tu backend

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
    const response = await assetsAPI.get('/users/me/');
    return response.data;
  } catch (error) {
    console.error('Error getting user', error);
    throw error;
  }
};

export const favAnAsset = async (userId, assetId) => {
  try {
    const response = await favAnAsset.post('/users/me/favorite', {
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
    const response = await favAnAsset.post('/users/me/unfavorite', {
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
    const response = await favAnAsset.get('/users/me/favorite', {
      data: { user:userId },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting fav assets', error);
    throw error;
  }
};

export const addPaymentMethod = async (userId, paymentMethod) => {
  try {
    const response = await assetsAPI.post('/users/me/paymentmethod', {
      data: { user:userId, paymentMethod },
    });
    return response.data;
  } catch (error) {
    console.error('Error posting payment method', error);
    throw error;
  }
};

export const deletePaymentMethod = async (userId, paymentMethod) => {
  try {
    const response = await assetsAPI.delete('/users/me/paymentmethod', {
      data: { user:userId, paymentMethod },
    });
    return response.data;
  } catch (error) {
    console.error('Error posting payment method', error);
    throw error;
  }
};