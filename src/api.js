import axios from "axios";

const api = axios.create({
  baseURL: "https://bitter-ferry.glitch.me/"
});

api.interceptors.request.use(function (config) {
  // 요청에 자동으로 토큰이 포함되게 하는 코드
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

export default api;
