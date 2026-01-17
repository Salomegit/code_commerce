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

export const login = async (credentials: {username: string, password: string}) => {
  try {
    const response = await axios.post(AUTH_URLS.LOGIN, credentials, { 
      withCredentials: true 
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Re-throw so the caller can handle it
  }
}
export const refreshToken = async () => {
  try {
    const response = await axios.post(AUTH_URLS.REFRESH_TOKEN_URL, {}, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
}

export const  callRefreshToken = async  (error:any, func:any) => {
  if (error.response.status === 401 && error.response) {
    const tokenRefreshed = await refreshToken();

    if (tokenRefreshed) {
      const retryResponse = await func();
      return retryResponse.data;
    }
    }

    return false
}

export const logout = async () => {

  try {
    const response = await axios.post(AUTH_URLS.LOGOUT, {}, { withCredentials: true });
    return response.data.message;
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
}
   
