import React from 'react'
import BusinessSummery from '../components/BusinessSummery/BusinessSummery'
import ContactUs from '../components/ContactUs/ContactUs'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Products/>
        <BusinessSummery/>
        <FAQ/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
