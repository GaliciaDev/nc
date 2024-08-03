const FooterPanel = () => {
    return(
        <footer className="bg-[var(--color-navTools)]  dark:bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto p-1 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="" className="h-8" alt="" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 text-white">Manual</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 text-white">Politicas de privacidad</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 text-white">Licencia</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline text-white">Soporte</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6  sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline text-white">New Concept</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default FooterPanel;
