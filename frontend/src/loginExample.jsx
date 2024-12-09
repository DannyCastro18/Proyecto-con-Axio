import PrimaryButton from "./components/PrimaryButton";
import PlatformsButton from './components/PlatformsButton';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginExample = () => {
    const [formData, setFormData] = useState({ correo: "", contraseña: "" });
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/login", formData);
            setMensaje("Inicio de sesión exitoso");
            localStorage.setItem("token", response.data.token);

            setTimeout(() => {
                navigate("/Home"); // Redirige a la ruta deseada
            }, 2000);
        } catch (error) {
            setMensaje(error.response?.data?.error || "Error al iniciar sesión");
        }
    };

    return (
        <>
            <section className='flex items-center h-screen w-screen fixed z-10'>
                <section className="w-full h-full flex justify-center items-center">
                    <section className="flex flex-col p-12 bg-white/20 h-4/6 rounded-lg">
                        <Link className="text-3xl self-start" to="/"><i className="fa-solid fa-angle-left text-white"></i></Link>
                        <h1 className='text-3xl font-bold text-white'>Login</h1>
                        <form onSubmit={handleSubmit} className="flex flex-col p-4">
                            <div className="mt-4 flex flex-col self-center">
                                <label className="self-start text-white" htmlFor="correo">Email</label>
                                <input
                                    className="w-96 mb-2 bg-zinc-200 p-2 rounded-lg"
                                    type="email"
                                    name="correo"
                                    id="correo"
                                    placeholder="user@gmail.com"
                                    value={formData.correo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col self-center">
                                <label className="self-start text-white" htmlFor="contraseña">Password</label>
                                <input
                                    className="w-96 mb-1 bg-zinc-200 p-2 rounded-lg"
                                    type="password"
                                    name="contraseña"
                                    id="contraseña"
                                    placeholder="Password"
                                    value={formData.contraseña}
                                    onChange={handleChange}
                                    required
                                />
                                <Link className="text-right text-white text-xs" to="/RecoveryPassword">Forgot your password?</Link>
                            </div>
                            {mensaje && <p className={`text-center mt-2 ${mensaje.includes("Error") ? "text-red-500" : "text-green-500"}`}>{mensaje}</p>}
                            <div>
                                <PrimaryButton clases="w-96" text="Login" />
                            </div>
                        </form>
                        <section className="flex text-sm justify-center">
                            <p className="text-white mr-36">Don't you have an account?</p>
                            <Link className="text-white" to="/SignUpExample">Register</Link>
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

export default LoginExample;
