import React from "react"
import { Route, Routes, Link } from "react-router-dom";


function RecoveryPassword2() {
    return (
        <>
            <div className="bg-white/20 p-8 rounded-lg shadow-lg max-w-md w-full  inset-x-1/3 z-10 ">
                <Link to='/recoveryPassword'>
                    <button className="text-left mb-4 focus:outline-none w-full">
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
                <h1 className="text-3xl font-bold mb-4 text-center text-white">Password Recovery</h1>
                <p className="text-center text-white mb-2 ">
                    To protect your account, enter the 6-digit code that we just sent to your email
                </p>

                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium bg text-white text-left">
                            Code
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none sm:text-sm text-center bg-slate-200 rounded-lg"
                            placeholder="* * * *"
                        />
                    </div>
                    <div className="flex justify-center items-center py-2 h-12 border rounded-lg border-white">
                        <svg className="m-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g className="info-outline"><g fill="#fff" className="Vector"><path fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clipRule="evenodd"></path><path fillRule="evenodd" d="M12 11a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1" clipRule="evenodd"></path><path d="M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path></g></g></svg>
                        <p className="text-white text-left text-sm " >Continuing will sign you out of all devices</p>
                    </div>
                    <button
                        type="submit"
                        className="rounded-lg font-black my-4 bg-violet-500 text-white py-3 px-4 w-full hover:bg-violet-800 text-lg mb-2"
                    >
                        Send code
                    </button>
                </form>
            </div>
            
        </>
    )
}

export default RecoveryPassword2;