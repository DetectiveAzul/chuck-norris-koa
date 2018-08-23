import { getAccessToken } from './AuthService';
const BASE_URL = 'http://localhost:3001/api/v1';

const getFoodData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/food`);
      return await response.json();
    }
    catch(error) {
      return error;
    }
};

const getCelebrityData = async () => {
  const token = getAccessToken();
  try {
    const response = await fetch(`${BASE_URL}/celebrity`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        cache: 'default',
        mode: 'no-cors'
      })
    return await response.json();
  }
  catch(error) {
    return error;
  }
};

export {getFoodData, getCelebrityData};
