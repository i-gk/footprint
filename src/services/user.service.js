import { makePOST } from "../services/httpcore.service";
import AppConfig from "../configs/app.configs";
import storage from "../utils/storage.service";
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from "../utils/appKeys/auth.keys";

export async function performLogin({ email, password }) {
 const api = AppConfig.api.user.auth.login;

 const response = await makePOST(api, { email, password }, true);
 saveToken(response.data.accessToken);
 return response.data;
}

function saveToken(token) {
 storage.save(ACCESS_TOKEN_LOCAL_STORAGE_KEY, token);
}
