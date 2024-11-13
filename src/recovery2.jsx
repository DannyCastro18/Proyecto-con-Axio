import React from "react"
import { Route, Routes, Link } from "react-router-dom";


const AlertIcon = function () { '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1"/></g></svg>' }

function RecoveryPassword2() {
    return (
        <>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full fixed inset-x-1/3 z-10">
                <Link to='/recoveryPassword'>
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
                To protect your account, enter the 6-digit code that we just sent to your email
                </p>

                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium bg text-gray-700 text-left">
                            Code
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none sm:text-sm text-center bg-slate-200 rounded-lg"
                        />
                    </div>
                    <div className="flex justify-center items-center py-2 h-12 border rounded-lg border-violet-500">
                        <img className="h-8 text-color mx-4" src="/public/alert-icon.png" alt="" />
                        <p className="text-violet-600 text-left text-sm" >Continuing will sign you out of all devices</p>
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