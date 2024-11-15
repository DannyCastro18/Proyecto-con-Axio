import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import PrimaryButton from "./components/PrimaryButton";
import PlatformsButton from './components/PlatformsButton';

const SignUpExample = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== checkPassword) {
            setError("Contraseña denegada.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/register', {
                name,
                email,
                password,
            });
            navigate('LoginExample');
        } catch (error) {
            console.error('Error al registrarse: ', error);
            setError('Hubo un problema al registrar tu cuenta. Intenta nuevamente.')
        }
    };

    return (
        <>
            <section className='flex items-center h-screen w-screen fixed z-10'>
                <section className="bg-white w-full h-full flex justify-center">
                    <section className="flex flex-col w-2/3 p-12">
                        <Link className="text-3xl self-start" to="/"><i className="fa-solid fa-angle-left"></i></Link>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form className="flex flex-col p-4" onSubmit={handleSignUp}>
                            <div className="mt-4 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="text" name="name" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mt-2 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mt-2 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mt-2 flex flex-col self-center ">
                                <input className="w-96 mb-2 bg-zinc-200 p-2 rounded-lg" type="password" name="check-password" id="check-password" placeholder='Confirm your Password' value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)}/>
                            </div>
                            {error && <p className="text-violet-500 text-center mt-2">{error}</p>}
                            <div>
                                <PrimaryButton clases="w-96 " text="Registrarse" ruta="/SignUpExample" />
                            </div>
                        </form>
                        <section className="flex text-sm justify-center gap-36">
                            <p>Do you already have an account?</p>
                            <Link className="text-violet-800" to="/LoginExample">Login</Link>
                        </section>
                        <section className="w-96 mt-8 flex flex-col items-center gap-2 mx-auto">
                            <PlatformsButton icon="fa-brands fa-google" text="Continue with Google" />
                            <PlatformsButton icon="fa-brands fa-square-facebook" text="Continue with Facebook" />
                            <PlatformsButton icon="fa-brands fa-microsoft" text="Continue with Microsoft" />
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default SignUpExample;