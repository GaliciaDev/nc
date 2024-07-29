import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const Ncpanel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                history.push('/panelView');
            }
        } catch (error) {
            console.error("Error al iniciar sesión", error);
        }
    };

    return (
        <section className="login">
            <div className="login__container">
                <h2>Ingresar al panel</h2>
                <div className="signin">
                    <form onSubmit={handleSubmit}>
                        <div className="input__container">
                            <label htmlFor="username">Usuario</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="correo@newconcept.com.mx"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input__container">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="*****************"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Ingresar</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Ncpanel;