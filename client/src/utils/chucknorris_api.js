const BASE_URL = 'http://localhost:3001/api/v1/';

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
  try {
    const response = await fetch(`${BASE_URL}/celebrity`);
    return await response.json();
  }
  catch(error) {
    return error;
  }
};

export {getFoodData, getCelebrityData};
