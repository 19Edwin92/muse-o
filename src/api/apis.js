import axios from "axios";
import { cookies } from "../shared/cookies";

// 토큰없이 보낼때
export const apis = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 토큰 넣어서 보낼때
export const apis_token = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {},
});

apis_token.interceptors.request.use((config) => {
  const token = cookies.get("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apis_token.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  function (response) {
    return response;
  },

  // 오류 응답을 내보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error);
  }
);
