import { getAccessToken } from './AuthService';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api/v1';

function getFoodData() {
  const url = `${BASE_URL}/food`;
  return axios.get(url)
    .then(response => response.data);
}

function getCelebrityData() {
  const url = `${BASE_URL}/celebrity`;
  return axios.get(url)
    .then(response => response.data);
}

export {getFoodData, getCelebrityData};
