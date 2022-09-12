import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000"

function createHeaders(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  return config;
}

function signUp (body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function login (body) {
  const promise = axios.post(`${BASE_URL}/login`, body);
  return promise;
}

function createExtract (body, token) {
  const config = createHeaders(token);
  const promise = axios.post(`${BASE_URL}/extract`, body, config);
  return promise;
}

function getExtract (token) {
  const config = createHeaders(token);
  const promise = axios.get(`${BASE_URL}/extract`, config);
  return promise;
}

function deleteExtract (extractId, token){
  const config = createHeaders(token);
  const promise = axios.delete(`${BASE_URL}/extract/${extractId}`, config);
  return promise;
}

export {
  signUp,
  login,
  createExtract,
  getExtract,
  deleteExtract
}