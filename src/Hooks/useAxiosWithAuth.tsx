import { useCookies } from "react-cookie";
import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";
import { useNavigate } from "react-router-dom";

const useAxiosWithAuth = (): AxiosInstance => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: " http://52.79.226.246/",
    headers: {
      Authorization: `${cookies.jwt}`,
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = cookies.jwt;
      if (token) {
        config.headers = config.headers || {};
        (config.headers as AxiosRequestHeaders).Authorization = `${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const statusCode = error.response?.status;
      if (statusCode === 419) {
        error.response.statusText = "Unauthorized";
        error.response.status = 419;
        removeCookie("jwt");
        navigate("/");
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosWithAuth;
