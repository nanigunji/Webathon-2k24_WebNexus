import React from 'react'
import TNavBar from '../TNavBar/TNavBar'
import { Outlet } from 'react-router-dom'

function TripDetails() {
  return (
    <div className=''>
      <div className=' mt-2 mx-auto me-5'>
      <TNavBar/>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default TripDetails