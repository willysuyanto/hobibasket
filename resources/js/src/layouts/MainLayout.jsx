import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

export default function MainLayout() {
  return (
    <div>
        <Navbar />
        <Outlet/>
        <Footer />
    </div>
  )
}
