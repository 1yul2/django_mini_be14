import axios from "axios";

// 개발용 기본값: 장고 개발서버
const DEFAULT_API_BASE_URL = "http://localhost:8000";

// Vite 환경변수에서 먼저 찾고, 없으면 기본값 사용
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL;

// 👉 여기서 /api 까지 붙여준다
export const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: false,
});

// 요청 인터셉터: 로컬스토리지에서 access token 꺼내서 Authorization 헤더 붙이기
apiClient.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem("access");
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
