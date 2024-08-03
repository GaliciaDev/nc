import { Link } from "react-router-dom";
import CompanyLogo from '../../../backend/assets/icons/settings/logo-nc-sin-fondo.png';
import '../assets/css/views/login.css';

const Ncpanel = () => {
    return (
        <section className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url(../../img/media/backinfo.jpg)" }}>
            <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-center mb-6">
                    <img src={CompanyLogo} alt="Company Logo" className="h-16 w-100 m-0 p-0 custom-drop-shadow" />
                </div>
                
                <form method="post">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-bold mb-2">Usuario</label>
                        <input type="text" id="#" name="username" placeholder="correo@newconcept.com.mx" required className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-bold mb-2">Contraseña</label>
                        <input type="password" id="#" name="password" placeholder="••••••••••••••••" required className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <button type="submit" className="w-full bg-[var(--color-buttons)] text-white py-2 rounded hover:bg-[var(--color-hover-buttons)]">Ingresar</button>
                    <div className="text-center mt-4">
                        <Link to="/panelView" className="text-transparent">Acceder</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Ncpanel;