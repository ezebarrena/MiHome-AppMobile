import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.6:8080';
const assetsAPI = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        // Otros encabezados personalizados que desees configurar
    },
});

export const uploadAssetImage = async (assetData) => {
    try {
        console.log(assetData, 't');
        const response = await assetsAPI.post('/assets/uploadPic', assetData);
        return response;
    } catch (error) {
        console.error('Error creating imageAsset:', error);
        throw error;
    }
};