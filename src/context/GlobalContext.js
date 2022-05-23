import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { privateAxios } from "../api/privateAxios";


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [updateItem, setUpdateItem] = useState();
  // const { isLoading, error, data: products } = useQuery('products', () => privateAxios('/product_all').then(result => result.data))
  // console.log('products',products);

  

    return (<GlobalContext.Provider value={{updateItem, setUpdateItem }}>
        {children}
    </GlobalContext.Provider>)
}