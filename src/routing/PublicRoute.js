import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateNewProduct from '../components/Products/CreateNewProduct'
import DashboardPage from '../pages/DashboardPage'
import Home from '../pages/Home'

export default function PublicRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='dashboard' element={<DashboardPage/>}>
        <Route path='createProduct' element={<CreateNewProduct/>}/>


      </Route>

    </Routes>
  )
}
