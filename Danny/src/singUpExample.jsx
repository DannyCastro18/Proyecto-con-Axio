import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PlatformsButton from './components/PlatformsButton';
import PrimaryButton from "./components/PrimaryButton";



const SignUpExample = () => {
    const [nombre, setName] = useState('');
    const [apellido, setLastName] = useState('');
    const [correo, setEmail] = useState('');
    const [contraseña, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                nombre,
                apellido,
                correo,
                contraseña,
            });
            navigate('/loginExample'); // Asegúrate de que esta ruta sea válida.
        } catch (error) {
            console.error('Error al registrarse: ', error);
            setError('Hubo un problema al registrar tu cuenta. Intenta nuevamente.');
        }
    };

    return (
        <section className="flex h-screen w-screen fixed z-10">
            <section className="w-full h-full flex justify-center">
                <section className="flex flex-col w-50 p-12">
                    <form onSubmit={handleSignUp} className="mt-24 w-50 bg-black/40 flex flex-col p-4">
                        <h1 className="text-2xl font-bold text-white">Registrarse</h1>
                        <div className="mt-4 flex flex-col self-center">
                            <input
                                className="w-96 bg-zinc-200 p-2 rounded-lg"
                                type="text"
                                name="nombre"
                                id="nombre"
                                placeholder="Nombres"
                                value={nombre}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mt-4 flex flex-col self-center">
                            <input
                                className="w-96 bg-zinc-200 p-2 rounded-lg"
                                type="text"
                                name="apellido"
                                id="apellido"
                                placeholder="Apellidos"
                                value={apellido}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="mt-4 flex flex-col self-center">
                            <input
                                className="w-96 bg-zinc-200 p-2 rounded-lg"
                                type="email"
                                name="correo"
                                id="correo"
                                placeholder="Correo"
                                value={correo}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-4 flex flex-col self-center">
                            <input
                                className="w-96 mb-2 bg-zinc-200 p-2 rounded-lg"
                                type="password"
                                name="contraseña"
                                id="contraseña"
                                placeholder="Contraseña"
                                value={contraseña}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className="text-violet-300 mt-2">{error}</p>}
                        <div>
                            <PrimaryButton clases="w-96" text="Register"/>
                        </div>
                        <section className="flex text-sm justify-center gap-36 mb-4 text-white">
                            <p className="mt-5">¿Ya tienes una cuenta?</p>
                            <Link className="text-violet-400 mt-5" to="/loginExample">
                                Inicia sesión
                            </Link>
                        </section>
                        <section className="w-96 mt-3 flex flex-col items-center gap-2 mx-auto text-white">
                            <PlatformsButton icon="fa-brands fa-google" text="Continue with Google" />
                            <PlatformsButton icon="fa-brands fa-square-facebook" text="Continue with Facebook" />
                            <PlatformsButton icon="fa-brands fa-microsoft" text="Continue with Microsoft" />
                        </section>
                    </form>
                </section>
            </section>
        </section>
    );
};

export default SignUpExample;
