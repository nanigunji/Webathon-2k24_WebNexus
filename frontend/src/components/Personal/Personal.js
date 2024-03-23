import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Personal.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Personal() {
    let navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    
    navigate('/sigin')
  };

  return (
    <div className="container m-3">
      <div className="form-wrapper w-50 p-5 mx-auto border rounded">
        <h3 className='fs-2 text-info'>Complete Your profile</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-group">
            <label htmlFor="dateOfBirth" className="label">
              Date of Birth
            </label>
            <input
              type="date"
              {...register('dateOfBirth', { required: 'Date of Birth is required' })}
              className="input form-control"
            />
            {errors.dateOfBirth && (
              <span className="error">{errors.dateOfBirth.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="label">
              Gender
            </label>
            <select
              {...register('gender', { required: 'Gender is required' })}
              className="form-control"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span className="error">{errors.gender.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="address" className="label">
              Address
            </label>
            <textarea
              {...register('address', { required: 'Address is required' })}
              className="input form-control"
              placeholder="Enter your address"
            />
            {errors.address && <span className="error">{errors.address.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="preferredTransportShort" className="label">
              Preferred Transportation (Shorter Distance)
            </label>
            <select
              {...register('preferredTransportShort', { required: 'Preferred transportation is required' })}
              className="form-control"
            >
              <option value="">Select Transport</option>
              <option value="bus">Bus</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>
            {errors.preferredTransportShort && (
              <span className="error">{errors.preferredTransportShort.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="preferredTransportLong" className="label">
              Preferred Transportation (Longer Distance)
            </label>
            <select
              {...register('preferredTransportLong', { required: 'Preferred transportation is required' })}
              className="form-control"
            >
              <option value="">Select Transport</option>
              <option value="flight">Flight</option>
              <option value="train">Train</option>
              <option value="bus">Bus</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>
            {errors.preferredTransportLong && (
              <span className="error">{errors.preferredTransportLong.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="interestedPlaces" className="label">
              Interested Places (comma separated)
            </label>
            <input
              type="text"
              {...register('interestedPlaces')}
              className="input form-control"
              placeholder="e.g., Rome, Paris, Tokyo"
            />
          </div>
          <button className="button btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Personal;
