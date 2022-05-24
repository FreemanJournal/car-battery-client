import React from 'react'
import Authorization from '../components/Authorization/Authorization'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function SignInPage() {
  return (
    <>
      <Navbar />
      <Authorization signIn />
      <Footer />
    </>
  )
}
