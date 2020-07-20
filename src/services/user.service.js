import { makePOST } from "../services/httpcore.service";
import AppConfig from "../configs/app.configs";

export async function performLogin({ email, password }) {
 const api = AppConfig.api.user.auth.login;

 const response = await makePOST(api, { email, password }, true);
 return response.data;
}
