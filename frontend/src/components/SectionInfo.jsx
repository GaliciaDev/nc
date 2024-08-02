import '../assets/css/main.css'

const SectionInfo = () => {
    return (
        <section className="bg-white dark:bg-gray-900 body">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight text-gray-900 dark:text-white">En New Concept</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, ipsum doloribus iusto et sequi dolore corporis quas, molestiae iste reprehenderit, praesentium distinctio id est dolores provident expedita labore hic saepe!</p>
                    <p>Lorem, ipsum dolor sit amet consect</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://i.ibb.co/fSkqGLD/4.jpg" alt="office content 1"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://i.ibb.co/kXZjBck/3.jpg" alt="office content 2"/>
                </div>
            </div>
        </section>
    );
}

export default SectionInfo;