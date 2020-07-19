import axios from "axios";

const FOOTPRINT_SERVER = "http://localhost:8000/api/v1";
const API_TIMEOUT = 3000;

const http = axios.create({
 baseURL: FOOTPRINT_SERVER,
 timeout: API_TIMEOUT,
});

export function makeGET(api, { urlParams, headers }, isPublicApi = false) {
 const defaultAppHeaders = isPublicApi ? baseHeaders() : defaultHeaders();

 return http.get(api, {
  params: urlParams,
  headers: {
   ...headers,
   defaultAppHeaders,
  },
 });
}

export function makePOST(
 api,
 data,
 { urlParams, headers },
 isPublicApi = false
) {
 const defaultAppHeaders = isPublicApi ? baseHeaders() : defaultHeaders();
 return http.post(api, data, {
  params: urlParams,
  headers: {
   ...headers,
   defaultAppHeaders,
  },
 });
}

export function makePUT(
 api,
 data,
 { urlParams, headers },
 isPublicApi = false
) {
 const defaultAppHeaders = isPublicApi ? baseHeaders() : defaultHeaders();

 return http.put(api, data, {
  params: urlParams,
  headers: {
   ...headers,
   defaultAppHeaders,
  },
 });
}

export function makeDELETE(api, { urlParams, headers }, isPublicApi = false) {
 const defaultAppHeaders = isPublicApi ? baseHeaders() : defaultHeaders();

 return http.delete(api, {
  params: urlParams,
  headers: {
   ...headers,
   defaultAppHeaders,
  },
 });
}

const defaultHeaders = () => {
 const _baseHeaders = baseHeaders();
 return {
  // todo this is to be fetched from local storage
  "APP-X-TOKEN": "",
  ..._baseHeaders,
 };
};

const baseHeaders = () => {
 return {
  Accept: "application/json",
 };
};
