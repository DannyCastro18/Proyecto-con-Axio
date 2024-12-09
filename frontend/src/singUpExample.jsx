import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import PrimaryButton from "./components/PrimaryButton";
import PlatformsButton from './components/PlatformsButton';

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
            navigate('/LoginExample'); // Asegúrate de que esta ruta sea válida.
        } catch (error) {
            console.error('Error al registrarse: ', error);
            setError('Hubo un problema al registrar tu cuenta. Intenta nuevamente.');
        }
    };

    return (
        <>
            <section className='flex items-center h-screen w-screen fixed z-10'>
                <section className="bg-[url('https://w.wallhaven.cc/full/gp/wallhaven-gpyrmq.jpg')] w-full h-full flex justify-center items-center">
                    <section className="flex flex-col p-12 bg-white/20 rounded-lg">
                        <Link className="text-3xl self-start" to="/"><i className="fa-solid fa-angle-left text-white"></i></Link>
                        <h1 className='text-3xl font-bold text-white'>Sign Up</h1>
                        <form className="flex flex-col p-4" onSubmit={handleSignUp}>
                            <div className="mt-4 flex flex-col self-center">
                                <input
                                    className="w-96 bg-zinc-200 p-2 rounded-lg"
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    placeholder="Name"
                                    value={nombre}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mt-2 flex flex-col self-center">
                                <input
                                    className="w-96 bg-zinc-200 p-2 rounded-lg"
                                    type="text"
                                    name="apellido"
                                    id="apellido"
                                    placeholder="LastName"
                                    value={apellido}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="mt-2 flex flex-col self-center">
                                <input
                                    className="w-96 bg-zinc-200 p-2 rounded-lg"
                                    type="email"
                                    name="correo"
                                    id="correo"
                                    placeholder="Email"
                                    value={correo}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mt-2 flex flex-col self-center">
                                <input
                                    className="w-96 mb-2 bg-zinc-200 p-2 rounded-lg"
                                    type="password"
                                    name="contraseña"
                                    id="contraseña"
                                    placeholder="Password"
                                    value={contraseña}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-violet-500 text-center mt-2">{error}</p>}
                            <div>
                                <PrimaryButton clases="w-96" text="Sign Up" ruta="/SignUpExample" />
                            </div>
                        </form>
                        <section className="flex text-sm justify-center gap-36">
                            <p className="text-white">Do you already have an account?</p>
                            <Link className="text-white" to="/LoginExample">Login</Link>
                        </section>
                        <section className="w-96 mt-8 flex flex-col items-center gap-2 mx-auto text-white">
                            <PlatformsButton icon="fa-brands fa-google" text="Continue with Google" />
                            <PlatformsButton icon="fa-brands fa-square-facebook" text="Continue with Facebook" />
                            <PlatformsButton icon="fa-brands fa-microsoft" text="Continue with Microsoft" />
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
};

export default SignUpExample;
