import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

}

export const useAppContext = () => {
  return useContext(AppContext);
};