import { makeGET } from "./httpcore.service";

export function fetchMemories() {
 // TODO: Api to be fetched from configuration file
 const API = "/memories";
 return makeGET(API).then((result) => result.data.previews);
}
