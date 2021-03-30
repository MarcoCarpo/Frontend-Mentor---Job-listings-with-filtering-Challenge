import React, { useContext, useReducer } from "react";
import { reducer } from "./reducer";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

const initialState = {
  id: 0,
};

export const useGlobalContext = () => {
  const { state, dispatch } = useReducer(reducer, initialState);

  return useContext(AppContext);
};

export default AppProvider;
