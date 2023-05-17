import { useCookies } from "react-cookie";
import axios, { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";

const useAxiosWithAuth = (): AxiosInstance => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  const createAxiosInstance = () => {
    return axios.create({
      baseURL: "http://52.79.226.246/",
      headers: {
        Authorization: `${cookies.jwt}`,
      },
    });
  };

  let axiosInstance = createAxiosInstance();

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const statusCode = error.response?.status;
      if (statusCode === 419 || statusCode === 401) {
        try {
          const refreshResponse = await axios.post(
            "http://52.79.226.246/auth/refresh",
            { refresh: cookies.jwt }
          );
          console.log(refreshResponse);
          const newToken = refreshResponse.data.accessToken;
          setCookie("jwt", newToken);
          axiosInstance = createAxiosInstance();
          error.config.headers["Authorization"] = `Bearer ${newToken}`;
          return axiosInstance(error.config);
        } catch (refreshError) {
          removeCookie("jwt");
          navigate("/");
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosWithAuth;
