let { default: axios } = require("axios");

let instance = axios.create();

const onRequest = (config: any) => {
  config.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const access_token = localStorage.getItem("accessToken") ?? "";
  config.headers.Authorization = `Bearer ${access_token}`;
  config.headers!["Cache-Control"] = "public";
  return config;
};

instance.interceptors.request.use(onRequest);

export default instance;
