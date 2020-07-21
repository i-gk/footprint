import { useState } from "react";

export default function useLocalStorage(key, initialValue = "") {
 const [storedValue, setStoredValue] = useState(() => {
  try {
   const storedValue = window.localStorage.getItem(key);
   return storedValue ? JSON.parse(storedValue) : initialValue;
  } catch (error) {
   return initialValue;
  }
 });

 const setValue = (value) => {
  try {
   const valueToStore = value instanceof Function ? value(storedValue) : value;
   setStoredValue(valueToStore);
   window.localStorage.setItem(key, JSON.stringify(valueToStore));
  } catch (error) {
   console.error(error);
  }
 };
 return [storedValue, setValue];
}
