import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateNewProduct from '../components/Dashboard/Admin/CreateNewProduct'
import ManageOrders from '../components/Dashboard/Admin/ManageOrders'
import ManageProducts from '../components/Dashboard/Admin/ManageProducts'
import UpdateProducts from '../components/Dashboard/Admin/UpdateProducts'
import CreateNewReview from '../components/Dashboard/User/CreateNewReview'
import MyOrders from '../components/Dashboard/User/MyOrders'
import MyProfile from '../components/Dashboard/User/MyProfile'
import Payment from '../components/Dashboard/User/Payment'

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
        <Route path='payment/:productID' element={<Payment/>}/>
        <Route path='myProfile' element={<MyProfile/>}/>
        <Route path='manageProduct' element={<ManageProducts/>}/>
        <Route path='manageOrder' element={<ManageOrders/>}/>
        <Route path='updateProduct/:productID' element={<UpdateProducts/>}/>
        <Route path='createNewReview' element={<CreateNewReview/>}/>
        <Route path='createNewProduct' element={<CreateNewProduct/>}/>
      </Route>

    </Routes>
  )
}
