import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import ImageSlider from '../ImageSlider/ImageSlider'

function RootLayout() {
  return (
    <div> 
        <NavBar/>
        <div className="container" style={{minHeight:"80vh"}}>
        <Outlet/>
      </div>

      <Footer/>
      
    </div>
  )
}

export default RootLayout