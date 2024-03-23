import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';


function BookBus() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Bus search details:', data);
    // Implement logic to submit bus search data (e.g., API call)
    
  };

  return (
    <div className="container mt-5 border p-4 border-primary bg-info rounded mb-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <label htmlFor="from" className="form-label">
              From:
            </label>
            <input
              type="text"
              className="form-control"
              id="from"
              placeholder="Enter origin city"
              {...register('from', { required: true })}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="to" className="form-label">
              To:
            </label>
            <input
              type="text"
              className="form-control"
              id="to"
              placeholder="Enter destination city"
              {...register('to', { required: true })}
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <label htmlFor="departureDate" className="form-label">
              Departure Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="departureDate"
              {...register('departureDate', { required: true })}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <label htmlFor="passengerCount" className="form-label mr-2">
              Passengers:
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control text-center"
                id="passengerCount"
                min="1"
                {...register('passengers', { required: true, min: 1 })}
              />
            </div>
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-12">
            <label htmlFor="busType" className="form-label">
              Bus Type:
            </label>
            <select
              className="form-control"
              id="busType"
              {...register('selectedBusType', { required: true })}
            >
              <option value="">Select Bus Type</option>
              <option value="Seater">Seater</option>
              <option value="Sleeper">Sleeper</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Search Buses</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookBus;
