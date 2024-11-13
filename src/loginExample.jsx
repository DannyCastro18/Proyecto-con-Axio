import { Route, Routes, Link } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";
import PlatformsButton from './components/PlatformsButton';

const LoginExample = () => {
    return (
        <>
            <section className='flex items-center h-screen w-screen fixed z-10'>
                <section className="bg-white w-full h-full flex justify-center">
                    <section className="flex flex-col w-2/3 p-12">
                        <Link className="text-3xl self-start" to="/"><i className="fa-solid fa-angle-left"></i></Link>
                        <h1 className='text-3xl font-bold'>Login</h1>
                        <form className="flex flex-col p-4 ">
                            <div className="mt-4 flex flex-col self-center">
                                <label className="self-start text-zinc-800" htmlFor="email">UserName</label>
                                <input className="w-96 mb-2 flex justify-between bg-zinc-200 p-2 rounded-lg" type="email" name="email" id="email" placeholder='user@gmail.com' />
                            </div>
                            <div className=" flex flex-col self-center">
                                <label className="self-start text-zinc-800" htmlFor="password">Password</label>
                                <input className="w-96 mb-1 bg-zinc-200 p-2 rounded-lg" type="password" name="password" id="password" placeholder='Password' />
                                <Link className="text-right text-violet-800 text-xs" to="/recoverPass">Forgot your password?</Link>

                            </div>
                            <div>
                                <PrimaryButton clases="w-96" text="Login" />
                            </div>
                        </form>
                        <section className="flex text-sm justify-center ">
                            <p className="text-violet-800 mr-36 ">Don't you have an account?</p>
                            <Link className="text-violet-800" to="/SignUp">Register</Link>
                        </section>
                        <section className="w-96 mt-8 flex flex-col items-center gap-2 mx-auto ">
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