import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Purchase from '../components/Purchase/Purchase';

export default function PurchasePage() {
  const {productID} = useParams()
  return (
    <div>
      <Navbar/>
      <Purchase productID={productID}/>
      <Footer/>

    </div>
  )
}
