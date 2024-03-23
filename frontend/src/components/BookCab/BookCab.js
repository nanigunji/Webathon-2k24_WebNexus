import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';


function BookCab() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Car booking details:', data);
    // Implement logic to submit booking data (e.g., API call)
  };

  return (
    <div className="container mt-5 border p-4 border-primary bg-info rounded mb-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <label htmlFor="pickupLocation" className="form-label float-left">
              Pick Up Location:
            </label>
            <input
              type="text"
              className="form-control"
              id="pickupLocation"
              placeholder="Enter pick up address"
              {...register('pickupLocation', { required: true })}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="dropLocation" className="form-label float-left">
              Drop Off Location:
            </label>
            <input
              type="text"
              className="form-control"
              id="dropLocation"
              placeholder="Enter drop off address"
              {...register('dropLocation', { required: true })}
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-12">
            <label htmlFor="selectedVehicle" className="form-label float-left">
              Choose Vehicle:
            </label>
            <select
              className="form-control"
              id="selectedVehicle"
              {...register('selectedVehicle', { required: true })}
            >
              <option value="">Select Vehicle</option>
              <option value="Car">Car</option>
              <option value="Auto">Auto</option>
              <option value="Bike">Bike</option>
            </select>
          </div>
        </div>
        
        <div className="row justify-content-center mb-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookCab;
