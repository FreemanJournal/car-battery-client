import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { privateAxios } from "../api/privateAxios";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [updateItem, setUpdateItem] = useState();


  

    return (<GlobalContext.Provider value={{updateItem, setUpdateItem }}>
        {children}
    </GlobalContext.Provider>)
}