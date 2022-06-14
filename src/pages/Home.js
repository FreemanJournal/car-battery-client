import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import BusinessSummery from '../components/BusinessSummery/BusinessSummery'
import ContactUs from '../components/ContactUs/ContactUs'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'
import Reviews from '../components/Reviews/Reviews'

export default function Home() {
  return (
    <div>
      <Announcement/>
        <Navbar/>
        <HeroSection/>
        <Products/>
        <BusinessSummery/>
        <Reviews/>
        <FAQ/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
