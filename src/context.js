import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import data from "./data";

const AppContext = React.createContext();

const initialState = {
  jobs: data,
  filterTablets: [],
  filteredList: data,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFilter = (filterName) => {
    dispatch({ type: "ADD_FILTER", payload: filterName });
  };

  const removeFilter = (filterName) => {
    dispatch({ type: "REMOVE_FILTER", payload: filterName });
  };

  const filterJobs = () => {
    dispatch({ type: "FILTER_JOBS" });
  };

  const clearAllTablets = () => {
    dispatch({ type: "CLEAR_ALL_ITEMS" });
  };

  useEffect(() => {
    filterJobs();
  }, [state.filterTablets]);

  return (
    <AppContext.Provider
      value={{ ...state, addFilter, removeFilter, filterJobs, clearAllTablets }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
