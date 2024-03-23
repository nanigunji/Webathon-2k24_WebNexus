import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookTrain.css'; // Import custom CSS for styling

function BookTrain() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Train search details:', data);
    // Implement logic to submit train search data (e.g., API call)
  };

  return (
    <div className="container mt-5 border p-4 border-primary bg-info rounded mb-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="col-md-6 mb-3">
            <label htmlFor="from" className="form-label float-left">
              From:
            </label>
            <input
              type="text"
              className="form-control mx-auto"
              id="from"
              placeholder="Enter origin city"
              {...register('from', { required: true })}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="to" className="form-label float-left">
              To:
            </label>
            <input
              type="text"
              className="form-control  mx-auto"
              id="to"
              placeholder="Enter destination city"
              {...register('to', { required: true })}
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6 mb-3">
            <label htmlFor="departureDate" className="form-label float-left ">
              Departure Date:
            </label>
            <input
              type="date"
              className="form-control  mx-auto"
              id="departureDate"
              {...register('departureDate', { required: true })}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <label htmlFor="passengerCount" className="form-label mr-2 float-left">
              Passengers:
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control text-center  mx-auto"
                id="passengerCount"
                min="1"
                {...register('passengerCount', { required: true, min: 1 })}
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label htmlFor="travelClass" className="form-label float-left">
              Travel Class:
            </label>
            <select
              className="form-control"
              id="travelClass"
              {...register('travelClass', { required: true })}
            >
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default BookTrain;
