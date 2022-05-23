import { createContext, useState } from "react";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [updateItem, setUpdateItem] = useState();

  

    return (<GlobalContext.Provider value={{updateItem, setUpdateItem }}>
        {children}
    </GlobalContext.Provider>)
}