import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export default function useAdmin(user) {
  const [isAdmin, setIsAdmin] = useState();
  const [isLoading,SetIsLoading] = useState(true);

  useEffect(()=>{
    axios(`${process.env.REACT_APP_SERVER_URI}/isAdmin/${user?.email}`).then(({data}) => {
      setIsAdmin(data.success)
      SetIsLoading(false)
    })
  },[user])

  return { isAdmin, adminLoading: isLoading }
}
