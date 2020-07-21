function storageService() {
 const save = (key, value) => {
  if (!value) throw new Error("Paramter value cannot be undefined");
  window.localStorage.setItem(key, value);
 };

 const get = (key) => {
  return window.localStorage.getItem(key);
 };

 const remove = (key) => {
  window.localStorage.removeItem(key);
 };

 return {
  save,
  get,
  remove,
 };
}

export default storageService();
