import PrimaryButton from "./components/PrimaryButton";

const Buttons = () => {
    return(
        <>
            <div className=" bg-white w-3/5 h-auto p-24 rounded-lg  flex justify-evenly">
                <PrimaryButton text="Iniciar sesión" ruta="LoginExample" clases={"w-64 "} />
                <PrimaryButton text="Registrate" ruta="SignUpExample" clases={"w-64"} />
            </div>
        </>
    )
}
export default Buttons;