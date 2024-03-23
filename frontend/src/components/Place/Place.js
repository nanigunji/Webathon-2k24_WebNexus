import React from 'react'
import { useNavigate } from 'react-router-dom'

function Place() {
    let navigate=useNavigate()
  return (
    <div className='mx-auto mt-4'>
        <div class="card mx-auto" style={{width:"40%",height:"50%"}}>
    <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSfcxEgt0rER1gO2aKNPW7hG-4ULD4O8iVDked32J52_nXUvbtUxHS-IQRXWdt-hUS6bxZnCpFkxD_0zi1ziUor2O8T3xe1XRKxXcPKbg" class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">Hyderabad</h5>
    <p class="card-text">Hyderabad District, India</p>
    <p>20,000 reviews and opinions</p>
    <a href="#" class="btn btn-primary" onClick={()=>navigate('/tripdetails/placedetails')}>View City</a>
    </div>
    </div>
    </div>
  )
}

export default Place