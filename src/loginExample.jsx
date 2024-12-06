import { Route, Routes, Link, useNavigate } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";
import PlatformsButton from './components/PlatformsButton';
import { useState } from "react";
import axios from 'axios';



const LoginExample = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password,
            });

            const token = response.data.token;

            localStorage.setItem('token', token);

            navigate('/Buttons')
        } catch (error) {
            console.log('Error al iniciar sesión: ', error);
            setError('Credenciales incorrectas. Intenta nuevamente.')
        }
    };

    return (
        <>
            <section className='flex items-center h-screen w-screen fixed z-10'>
                <section className=" w-full h-full flex justify-center items-center">
                    <section className="flex flex-col p-12 bg-white/20 h-4/6 rounded-lg">
                        <Link className="text-3xl self-start" to="/"><i className="fa-solid fa-angle-left text-white"></i></Link>
                        <h1 className='text-3xl font-bold text-white'>Login</h1>
                        <form className="flex flex-col p-4 " onSubmit={handleLogin}>
                            <div className="mt-4 flex flex-col self-center">
                                <label className="self-start  text-white" htmlFor="email ">UserName</label>
                                <input className="w-96 mb-2 flex justify-between bg-zinc-200 p-2 rounded-lg" type="email" name="email" id="email" placeholder='user@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className=" flex flex-col self-center">
                                <label className="self-start text-white" htmlFor="password">Password</label>
                                <input className="w-96 mb-1 bg-zinc-20 p-2 rounded-lg" type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Link className="text-right text-white text-xs" to="/RecoveryPassword" >Forgot your password?</Link>
                            </div>
                            {error && <p className="text-violet-500 text-center mt-2">{error}</p>}
                            <div>
                                <PrimaryButton clases="w-96" text="Login" ruta="/LoginExample" />
                            </div>
                        </form>
                        <section className="flex text-sm justify-center ">
                            <p className="text-white mr-36 ">Don't you have an account?</p>
                            <Link className="text-white" to="/SignUpExample" >Register</Link>
                        </section>
                        <section className="w-96 mt-8 flex flex-col items-center gap-2 mx-auto text-white ">
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

export default LoginExample;