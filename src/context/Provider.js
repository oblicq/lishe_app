import React, { createContext, useReducer } from "react";
import authInitialState from "./initialStates/authInitialState";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  return <GlobalContext.Provider value={[]}>{children}</GlobalContext.Provider>;
};
