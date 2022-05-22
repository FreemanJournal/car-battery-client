import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateNewProduct from '../components/Products/CreateNewProduct'
import DashboardPage from '../pages/DashboardPage'
import Home from '../pages/Home'
import PurchasePage from '../pages/PurchasePage'

export default function PublicRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/purchasePage/:productID' element={<PurchasePage/>} />
      <Route path='dashboard' element={<DashboardPage/>}>
        <Route index element={<CreateNewProduct/>}/>
      </Route>

    </Routes>
  )
}
