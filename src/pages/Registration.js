import React from 'react'
import Authorization from '../components/Authorization/Authorization'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function Registration() {
  return (
    <div>
      <Navbar />
      <Authorization signIn={false} />
      <Footer />
    </div>
  )
}
