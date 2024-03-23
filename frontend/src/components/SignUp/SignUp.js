import {useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {NavLink, useNavigate} from 'react-router-dom'

function SignUp() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let [err,setErr]=useState()
  let navigate=useNavigate()
  const onSignUpFormSubmit=async(userObj)=>{
    let res=await axios.post('http://localhost:4000/user-api/user',userObj)
    console.log(res)
    if(res.data.message==="User created"){
      navigate('/personal')
    }
    else{
      setErr(res.data.message)
    }
  }

  return (
    <div className='bg-danger p-5 border rounded border-white'>
      <h2 className='text-white fs-1'>Create Your Account </h2>
    <div className='container '>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow-sm">
            <h2 className='text-center p-3'>Signup</h2>
            <div className="card-body">
              {/* display the error message for signup */}
              <form onSubmit={handleSubmit(onSignUpFormSubmit)}>
                <div>
                  <input type="text" name="username" id="username" className="form-control mb-3" placeholder='Username' {...register('username')}/>
                </div>
                <div>
                  <input type="email" name="email" id="email" className="form-control mb-3" placeholder='Email' {...register('email')}/>
                </div>
                <div>
                  <input type="password" name="password" id="password" className="form-control mb-3" placeholder='Password' {...register('password')}/>
                </div>
                <button type="submit" className='btn btn-primary mx-auto d-block mt-2 mb-3 w-75 rounded-pill'>SignUp</button>
                <p className='text-center'>Already have an account? <NavLink className="fw-bold text-decoration-none" to="/signin">SignIn</NavLink></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp