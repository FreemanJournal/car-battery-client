import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateNewReview from '../components/Dashboard/User/CreateNewReview'
import MyOrders from '../components/Dashboard/User/MyOrders'
import MyProfile from '../components/Dashboard/User/MyProfile'
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
        <Route index element={<MyOrders/>}/>
        <Route path='myProfile' element={<MyProfile/>}/>
        <Route path='createNewReview' element={<CreateNewReview/>}/>
        <Route path='createNewProduct' element={<CreateNewProduct/>}/>
      </Route>

    </Routes>
  )
}
