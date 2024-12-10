

const PrimaryButton = (props) => {
    return (
        <button className={props.clases + "  bg-violet-400 hover:bg-violet-800 text-white font-black py-2 px-4 rounded-lg mt-4 "} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default PrimaryButton;