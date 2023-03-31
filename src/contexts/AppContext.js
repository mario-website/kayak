import React, {createContext, useContext, useState} from "react";
import {eventsData, formConfigData} from "./contextData";

const AppContext = createContext([]);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({children}) => {
  const [events, setEvents] = useState(eventsData);
  const [formConfig, setFormConfig] = useState(formConfigData);

  return (
    <AppContext.Provider
      value={{
        // @ts-ignore
        events,
        setEvents,
        formConfig,
        setFormConfig,
      }}>
      {children}
    </AppContext.Provider>
  );
};
