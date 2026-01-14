import { API_BASE_URL } from '@/libs/core/config/app.config'

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
    GOOGLE_LOGIN: `${API_BASE_URL}/auth/google-login`,
    VERIFY_EMAIL_RESET: `${API_BASE_URL}/`,
    RESET_PASSWORD: `${API_BASE_URL}/auth/reset-password`,
    VERIFY_EMAIL: `${API_BASE_URL}/auth/verify-email`,
  },

  // Profile
  PROFILE: {
    GET: `${API_BASE_URL}/user`,
    UPDATE: `${API_BASE_URL}/`,
  },

  // Weather
  WEATHER: {
    GET: `${API_BASE_URL}/weather`,
  },

  // Plant
  PLANT: {
    ANALYZE: `${API_BASE_URL}/plant`,
    GET_LOGS: `${API_BASE_URL}/plant`,
    GET_DETAIL: (id: string) => `${API_BASE_URL}/plant/${id}`,
  },
} as const
