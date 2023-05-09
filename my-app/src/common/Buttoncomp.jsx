export default function button(props){
    
    return(
        <button onClick={props.handler} type="submit" className="flex flex-col w-full justify-center items-center bg-bright-blue text-white font-bold rounded-md py-2 sm:w-60 ">
            {props.call}
        </button>
    )
}