const PROD_CONFIGS = {
 baseUrl: "http://localhost:8000/api/v1",
 timeout: 3000,
};

const DEV_CONFIGS = {
 baseUrl: "http://localhost:8000/api/v1",
 timeout: 3000,
};

const ENV_CONFIGS =
 process.env.NODE_ENV === "development" ? DEV_CONFIGS : PROD_CONFIGS;

const APP_CONFIG = {
 ...ENV_CONFIGS,
 api: {
  user: {
   auth: {
    login: "/user/auth/login",
    logout: "/user/auth/logout",
   },
  },
  memories: {
   getMemories: "/memories",
   search: "/memories/search",
  },
 },
};

export default APP_CONFIG;
