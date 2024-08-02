const ClientsReviews = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 p-20" >
      <div className="flex flex-col md:flex-row w-full h-[50vh] m-4 md:m-20 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img 
            className="object-cover w-full h-full" 
            src="https://via.placeholder.com/600x400" 
            alt="Placeholder"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
          <h3 className="mb-4 text-3xl font-bold text-gray-900">Expo Muebles</h3>
          <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero iste nostrum inventore minima sint exercitationem et, id necessitatibus incidunt deserunt itaque provident veritatis dolore laudantium, dicta assumenda! Fugiat, quo.</p>
        </div>
      </div>

    </div>
  );
}

export default ClientsReviews;