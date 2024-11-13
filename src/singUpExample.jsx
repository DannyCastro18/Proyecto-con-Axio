import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "./components/PrimaryButton";
import PlatformsButton from './components/PlatformsButton';

const SignUpExample = () => {
    const location = useLocation();

    return (
        <>
            <section className='flex items-center h-screen w-screen fixed z-10'>
                <section className="bg-white w-full h-full flex justify-center">
                    <section className="flex flex-col w-2/3 p-12">
                        <Link className="text-3xl self-start" to="/"><i className="fa-solid fa-angle-left"></i></Link>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form className="flex flex-col p-4">
                            <div className="mt-4 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="text" name="name" id="name" placeholder='Name' />
                            </div>
                            <div className="mt-2 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="email" name="email" id="email" placeholder='Email' />
                            </div>
                            <div className="mt-2 flex flex-col self-center ">
                                <input className="w-96 bg-zinc-200 p-2 rounded-lg" type="password" name="password" id="password" placeholder='Password' />
                            </div>
                            <div className="mt-2 flex flex-col self-center ">
                                <input className="w-96 mb-2 bg-zinc-200 p-2 rounded-lg" type="password" name="check-password" id="check-password" placeholder='Confirm your Password' />
                            </div>
                            <div>
                                <PrimaryButton clases="w-96 " text="Registrarse" />
                            </div>
                        </form>
                        <section className="flex text-sm justify-center gap-36">
                            <p>Do you already have an account?</p>
                            <Link className="text-violet-800">Login</Link>
                        </section>

                        {/* Seccion para iniciar sesion con otras plataformas */}
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