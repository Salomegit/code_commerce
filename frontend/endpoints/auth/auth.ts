import axios from 'axios';


const BASE_URL = 'http://127.0.0.1:8000/api/v1/users';

const AUTH_URLS = {
  LOGIN: `${BASE_URL}/login/`,
  REGISTER: `${BASE_URL}/register/`,
  LOGOUT: `${BASE_URL}/logout/`,
  REFRESH_TOKEN_URL: `${BASE_URL}/token/refresh/`,
  PROFILE: `${BASE_URL}/profile/`,
  CHANGE_PASSWORD: `${BASE_URL}/change-password/`,

};

export const login = async (credentials:{username: string, password: string}) =>{
  const response = await axios.post(AUTH_URLS.LOGIN, credentials,{  withCredentials: true });
    return response.data.message;
}


export const refreshToken = async () => {
  const response = await axios.post(AUTH_URLS.REFRESH_TOKEN_URL, {}, { withCredentials: true });
  return response.data;
}