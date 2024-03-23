import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const cards = [
  {
    title: 'Golconda',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/71/ad/ab.jpg', // Replace with your image URL
    details: 'Some details about card 1.'
  },
  {
    title: 'Hussain Sagar',
    image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQxnsE25BII3YlYrgtD2LGg5UPm0gOa6moPRPS_VJ8Qktx3Zw_lwM6nkvjViKjAH_ClyaopvQz2mYbrtoUA_rtXo-j11jJL0NhTbCPGuQ', // Replace with your image URL
    details: 'Some details about card 5.'
  },
  {
    title: 'Birla mandhir',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Birla_Mandir%2C_Hyderabad.png/1200px-Birla_Mandir%2C_Hyderabad.png', // Replace with your image URL
    details: 'Some details about card 5.'
  },
  {
    title: 'Hussain Sagar',
    image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQxnsE25BII3YlYrgtD2LGg5UPm0gOa6moPRPS_VJ8Qktx3Zw_lwM6nkvjViKjAH_ClyaopvQz2mYbrtoUA_rtXo-j11jJL0NhTbCPGuQ', // Replace with your image URL
    details: 'Some details about card 5.'
  }
];

function PlaceDetails() {
  return (
    <div className='mt-3 mb-3'>
        <h1>City <span className='text-danger'>Attractions</span></h1>
    <div className="container">
      <div className="row row-cols-3"> {/* 3 cards per row */}
        {cards.map((card, index) => (
          <div className="col mb-3" key={index}> {/* Add key for each card */}
            <div className="card" style={{height:"400px"}}>
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default PlaceDetails;
