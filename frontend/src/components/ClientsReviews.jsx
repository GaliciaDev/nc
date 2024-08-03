import React from 'react';
import reviews from '../../../backend/models/site/cardsBlog.json'; // Asegúrate de que la ruta sea correcta

const ClientsReviews = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 p-20">
      {reviews.map(review => (
        <div key={review.id} className="flex flex-col md:flex-row w-full min-h-[50vh] md:h-[50vh] m-4 md:m-20 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img 
              className="object-cover w-full h-full" 
              src={review.imageUrl} 
              alt={review.title}
            />
          </div>
          <div className="flex flex-col justify-start w-full md:w-1/2 p-8">
            <h3 className="mb-4 text-3xl font-bold text-gray-900">{review.title}</h3>
            <p className="text-lg text-gray-700">{review.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClientsReviews;