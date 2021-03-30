import React, { useContext, useReducer } from "react";
import { reducer } from "./reducer";
import data from "./data";

const AppContext = React.createContext();

const initialState = {
  jobs: data,
  isOk: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
