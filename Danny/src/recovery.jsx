import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RecoveryPassword() {
    const [correo, setCorreo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/recover-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correo }),
            });
            const data = await response.json();
            if (response.ok) {
                alert('Correo de recuperación enviado');
                navigate('/RecoveryPassword2');
            } else {
                alert(data.error || 'Ocurrió un error al enviar el correo');
            }
        } catch (error) {
            console.error('Error al enviar correo de recuperación:', error);
            alert('Error en el servidor, inténtalo más tarde.');
        }
    };

    return (
        <>
            <section className="w-full h-full flex justify-center">
                <div className="mt-40 bg-black/40 p-8 rounded-lg shadow-lg max-w-md w-full fixed justify-center items-center">
                    <Link to="/">
                        <button className="text-left focus:outline-none w-full">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                    <h1 className="text-3xl font-bold mb-4 text-center text-white">
                        Recover password
                    </h1>
                    <p className="text-center text-white mb-4">
                        Enter the email you registered with, and we will send you a code to verify your identity.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 mb-4">
                            <label htmlFor="email" className="block text-lg font-medium bg text-white text-left">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none sm:text-sm text-center bg-slate-200"
                                placeholder="Email"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-violet-400 text-white py-3 px-4 w-full rounded-lg hover:bg-violet-800 text-lg mb-2"
                        >
                            Send code
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default RecoveryPassword;
