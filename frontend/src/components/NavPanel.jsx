import React, { useState } from "react";
import data from '../../../backend/models/site/navPanel.json';
import CompanyLogo from '../../../backend/assets/icons/settings/logo-nc-sin-fondo.png';
import UserImg from '../../../backend/assets/icons/navegation/userPanel.png';
import LogOut from '../../../backend/assets/icons/navegation/logout.png';
import Menu from '../../../backend/assets/icons/menu/menu-panel.png';

const NavPanel = () => {
    const { user } = data;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-[var(--color-navTools)] border-gray-200 dark:bg-black dark:border-gray-700">
            <div className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={CompanyLogo} className="h-[7vh] w-full" alt="Logo de la empresa" />
                </div>
                
                <div className="md:hidden">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-white">
                        <img className="bg-white p-[.1em] h-10 w-10 rounded-full" src={Menu} alt="Menú" />
                    </button>
                </div>

                <div className={`w-full md:block md:w-auto ${isDropdownOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ml-auto">
                        <li>
                            <a href="/" className="block mt-1 text-white rounded text-lg hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-[var(--color-h2)] md:p-0 dark:text-white md:dark:hover:text-[var(--color-h2)] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{user.name}</a>
                        </li>
                        <li>
                            <img className="bg-white p-[.1em] h-10 w-10 rounded-full" src={UserImg} alt="Perfil del usuario" />
                        </li>
                        <li>
                            <a href="./home" className="block mt-1 text-white rounded text-lg hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-[var(--color-h2)] md:p-0 dark:text-white md:dark:hover:text-[var(--color-h2)] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cerrar sesión</a>
                        </li>
                        <li>
                            <img className="bg-white p-[.1em] h-10 w-10 rounded-full mr-4" src={LogOut} alt="Cerrar sesión" />
                        </li>
                        <li className="relative">
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between w-full text-white rounded text-lg hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-[var(--color-h2)] md:p-0 md:w-auto dark:text-white md:dark:hover:text-[var(--color-h2)] dark:focus:text-white  dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Menú
                                <img className="bg-white p-[.1em] h-10 w-10 ml-8 rounded-full" src={Menu} alt="Menú" />
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute right-0 mr-[-1em] mt-[3vh] w-[9em] bg-[var(--color-navTools)]">
                                    <li>
                                        <a href="/Sysemail" className="block px-4 py-2 text-white hover:bg-stone-700 dark:text-white">Roles de usuarios 👷‍♂️</a>
                                    </li>
                                    <li>
                                        <a href="/Sysemail" className="block px-4 py-2 text-white hover:bg-stone-700 dark:text-white">Agregar usuario 🔒</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/GaliciaDev/nc/commits/main/" className="block px-4 py-2 text-white hover:bg-stone-700 dark:text-white">Control de versiones ⚙️</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavPanel;