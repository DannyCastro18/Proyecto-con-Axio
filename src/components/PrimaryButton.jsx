import { Link } from "react-router-dom";

const PrimaryButton = (props) => {
    return (
        <Link to={`/${props.ruta}`} >
            <button className={props.clases + "  bg-violet-500 hover:bg-violet-800 text-white font-black py-2 px-4 rounded-lg mt-4 "} onClick={props.onClick}>
                {props.text}
            </button>
        </Link>
    )
}

export default PrimaryButton;