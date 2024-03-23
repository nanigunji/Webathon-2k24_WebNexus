import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookTrip.css'; // Import custom CSS for styling
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function BookTrip() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigate=useNavigate()

  const onSubmit = async(data) => {
    console.log('Train search details:', data);
let res=await axios.post('http://localhost:4000/user-api/booktrip',data)
    if(res.data.message==="trip planned"){
        navigate('/tripdetails')
        
    }

    // Implement logic to submit train search data (e.g., API call)
  };

  return (
    <div>
        <h1 className='mt-4 text-danger fs-2 text-decoration-underline'>Book Your trip....</h1>
    <div className="container mt-5 mx-auto border rounded p-5 bg-info">
        <div className='mt-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
            <div className='d-flex'>
          <div className="col-md-6 mb-3 me-4">
            <label htmlFor="from" className="form-label float-start">
              From:
            </label>
            <input
              type="text"
              className="form-control float-start"
              id="from"
              placeholder="Enter origin city"
              {...register("from", { required: true })}
            />
            {errors.from && <span>This field is required</span>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="to" className="form-label float-start">
              To:
            </label>
            <input
              type="text"
              className="form-control float-start"
              id="to"
              placeholder="Enter destination city"
              {...register("to", { required: true })}
            />
            {errors.to && <span>This field is required</span>}
          </div>
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6 mb-3">
            <label htmlFor="startdate" className="form-label float-start">
              Start Date:
            </label>
            <input
              type="date"
              className="form-control float-start"
              id="startdate"
              {...register("startdate", { required: true })}
            />
            {errors.startdate && <span>This field is required</span>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="enddate" className="form-label float-start">
              End Date:
            </label>
            <input
              type="date"
              className="form-control float-start"
              id="enddate"
              {...register("enddate", { required: true })}
            />
            {errors.startdate && <span>This field is required</span>}
          </div>
          <div className="col-md-6 d-flex align-items-center me-3">
            <label htmlFor="passengerCount" className="form-label mr-2 float-start">
              Passengers:
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control text-center float-start"
                id="passengerCount"
                min="1"
                {...register("passengerCount", { required: true })}
              />
              {errors.passengerCount && <span>This field is required</span>}
            </div>
          </div>
        </div>
        <div className='form-row   m-4 '>
            <label htmlFor="budget" className='float-start'>Budget</label>
            <input type="text"  id="budget" className='form-control w-25' {...register('budget')} placeholder='Your Budget' />
        </div>
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label htmlFor="travelClass" className="form-label float-start">
              Travel Class:
            </label>
            <select
              className="form-control w-25"
              id="travelClass"
              {...register("travelClass", { required: true })}
            >
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
              {/* Add more options as needed */}
            </select>
            {errors.travelClass && <span>This field is required</span>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default BookTrip;
