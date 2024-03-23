import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function UserProfile() {
  let navigate=useNavigate()
  return (
<div style={{
  backgroundImage: `url('https://media.istockphoto.com/id/485614909/photo/guide-explaining-to-tourists-the-coliseum-of-rome.jpg?s=612x612&w=0&k=20&c=cPJKPvRAi4M5g2NVHts5P7mZ1iwl_92ru6bXdTub6jQ=')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}} className='w-100'>
      <div style={{minHeight:'90vh'}}>
        <button className='btn btn-primary w-75 rounded-pill mx-auto m-5 ' style={{height:'80px'}} onClick={()=>navigate('/booktrip')}>Plan Your Trip</button>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default UserProfile