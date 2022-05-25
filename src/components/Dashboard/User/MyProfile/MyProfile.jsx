
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { privateAxios } from '../../../../api/privateAxios';
import auth from '../../../../utilities/firebase.init';
import Loader from '../../../../utilities/Loader';
import ProfileForm from './ProfileForm';

export default function MyProfile() {
  const [user, loading, error] = useAuthState(auth);

  const { isLoading, refetch, data: userData } = useQuery('userProfile', () => privateAxios(`/user/${user?.email}`).then(({ data }) => data))
  // useEffect(() => refetch(), [user])
  if (isLoading || user?.email !== userData?.email) return <Loader />

  return (
    <>
      <ProfileForm userData={userData} refetch={refetch} />


    </>
  )
}
