import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.css';


function BookFlight() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const watchPassengers = watch('passengers', 1); // Watch for changes in the 'passengers' field, default to 1

  const onSubmit = (data) => {
    console.log('Flight search details:', data);
    // Implement logic to submit flight search data (e.g., API call)
  };

  return (
    <div className="container mt-5 border p-4 border-primary bg-info rounded mb-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group row">
          <label htmlFor="from" className="col-sm-2 col-form-label">
            From:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="from"
              placeholder="Enter origin city"
              {...register('from', { required: true })}
            />
          </div>
        </div>
        {/* Other form fields... */}
        <div className="form-group row">
          <label htmlFor="passengers" className="col-sm-2 col-form-label">
            Passengers:
          </label>
          <div className="col-sm-10">
            <div className="input-group">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setValue('passengers', Math.max(watchPassengers - 1, 0))}
              >
                -
              </button>
              <input
                className="form-control"
                id="passengers"
                type="number"
                {...register('passengers', { required: true, min: 1 })}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setValue('passengers', watchPassengers + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default BookFlight;
