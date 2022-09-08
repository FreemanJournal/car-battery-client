import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateNewProduct from '../components/Dashboard/Admin/CreateProduct'
import MakeAdmin from '../components/Dashboard/Admin/MakeAdmin/MakeAdmin'
import ManageOrders from '../components/Dashboard/Admin/ManageOrders'
import ManageProducts from '../components/Dashboard/Admin/ManageProducts'
import UpdateProducts from '../components/Dashboard/Admin/UpdateProducts'
import CreateNewReview from '../components/Dashboard/User/CreateReview'
import MyOrders from '../components/Dashboard/User/MyOrders'
import MyProfile from '../components/Dashboard/User/MyProfile/MyProfile'
import Payment from '../components/Dashboard/User/Payment'
import MyPortfolio from '../components/MyPortfolio/MyPortfolio'
import BlogPage from '../pages/BlogPage'
import DashboardPage from '../pages/DashboardPage'
import Home from '../pages/Home'
import MyPortfolioPage from '../pages/MyPortfolioPage'
import NotFound from '../pages/NotFound'
import PurchasePage from '../pages/PurchasePage'
import Registration from '../pages/Registration'
import SignInPage from '../pages/SignInPage'
import AdminRoute from './AdminRoute'
import PrivateRoute from './PrivateRoute'


export default function PublicRoute() {



  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signIn' element={<SignInPage />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/purchasePage/:productID' element={<PrivateRoute><PurchasePage /></PrivateRoute>} />
      
      <Route path='dashboard' element={<PrivateRoute><DashboardPage /></PrivateRoute>}>
        {/* Admin Routes */}
        <Route path='manageOrders' element={<AdminRoute><ManageOrders /></AdminRoute>} />
        <Route path='manageProduct' element={<AdminRoute><ManageProducts /></AdminRoute>} />
        <Route path='updateProduct/:productID' element={<AdminRoute><UpdateProducts /></AdminRoute>} />
        <Route path='createNewProduct' element={<AdminRoute><CreateNewProduct /></AdminRoute>} />
        <Route path='makeAdmin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />
        {/* User Routes */}
        <Route path='myOrders' element={<MyOrders />} />
        <Route path='createNewReview' element={<CreateNewReview />} />
        <Route path='payment/:productID' element={<Payment />} />

        <Route path='myProfile' element={<MyProfile />} />
      </Route>

      <Route path='blog' element={<BlogPage/>} />
      <Route path='portfolio' element={<MyPortfolioPage />} />
      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}
