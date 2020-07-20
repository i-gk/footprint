import { makeGET } from "./httpcore.service";
import AppConfig from "../configs/app.configs";

export function fetchMemories() {
 const API = AppConfig.api.memories.getMemories;
 return makeGET(API).then((result) => result.data.previews);
}
