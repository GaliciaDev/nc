

const CardsInfo = () => {
    return (
        <div className="bg-white mx-auto max-w-7xl pb-20 body">
            <div className="px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl  text-gray-800 mb-8">Nuestra historia</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src="https://i.ibb.co/fr5FHkx/telas-5.jpg" alt="Blog Post 1" className="w-full h-52 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Title</h3>
                            <p className="text-gray-600 text-sm">txt</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src="https://i.ibb.co/yp7gXQM/1.jpg
" alt="Blog Post 2" className="w-full h-52 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Title</h3>
                            <p className="text-gray-600 text-sm">txt</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src="https://i.ibb.co/9VWwhRK/tapizado-1.jpg" alt="Blog Post 3" className="w-full h-52 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Title</h3>
                            <p className="text-gray-600 text-sm">txt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardsInfo;