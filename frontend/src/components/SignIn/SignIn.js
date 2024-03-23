import {useState,useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { userLoginThunk } from '../../redux/userSlice'
import { useSelector } from 'react-redux'


function SignIn() {
  let {register,handleSubmit}=useForm()
  let {loginUserStatus,errorOccured,errMsg,currentUser}=useSelector(state=>state.userLoginReducer)
  let [err,setErr]=useState('')
  let navigate=useNavigate()
  let dispatch=useDispatch()
  const onSignInSubmit=async(userCredObj)=>{
    dispatch(userLoginThunk(userCredObj))
  }
  useEffect(()=>{
    if(loginUserStatus===true){
      navigate('/user-profile')
    }
  },[loginUserStatus])
  return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow-sm">
            <h2 className='text-center m-2 p-2'>Signin</h2>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSignInSubmit)}>
                <div>
                  <input type="text" id="username" className='form-control mb-3 rounded-pill' placeholder='Username' {...register('username')} />
                </div>
                <div>
                  <input type="password"  id="password" className="form-control  rounded-pill" placeholder='Password' {...register('password')} />
                  <div className="forgot_password float-end text-primary fw-normal "><a href="" className='text-decoration-none'>forgot password?</a></div>
                </div>
                <button type="submit" className='btn btn-primary mx-auto d-block mt-5 w-75 rounded-pill' >Signin</button>
                <p className='text-center mt-3'>Dont have an account?<NavLink className="fw-bold text-decoration-none" to="/signup">SignUp</NavLink></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn