import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function DashboardPage() {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </div>
  )
}
