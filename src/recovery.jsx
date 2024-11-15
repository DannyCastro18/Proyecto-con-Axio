import React from "react"
import { Route, Routes, Link } from "react-router-dom";

function RecoveryPassword() {
    return (
        <>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full fixed inset-x-1/3 z-10">
                <Link to='/LoginExample'>
                    <button className="text-left mb-4 focus:outline-none w-full">
                        <svg
                            className="w-6 h-6 text-black"
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
                <h1 className="text-3xl font-bold mb-4 text-center">Password Recovery</h1>
                <p className="text-center text-gray-600 mb-2">
                    Enter the email with which you are registered, we will send you a code to verify that it is you
                </p>

                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium bg text-gray-700 text-left">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300  rounded-lg   shadow-sm focus:outline-none sm:text-sm text-center bg-slate-200"
                            placeholder=" chefsito@gmail.com"
                        />

                    </div>
                    <Link to="/RecoveryPassword2">
                        <button
                            type="submit"
                            className=" bg-violet-500 text-white py-3 px-4 w-full rounded-lg hover:bg-violet-800 text-lg mb-2"
                        >
                            Enviar código
                        </button>
                    </Link>
                </form>
            </div>
        </>
    )
}



export default RecoveryPassword;