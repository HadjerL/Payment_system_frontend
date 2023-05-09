export default function Input(props){

    return(
        <label htmlFor="nss" className="flex flex-col">
                <p className="ml-3">{props.label}</p>
                <input onChange={(event)=>props.handlechange(event)} type={props.type} placeholder="" name={props.label} className="w-72 px-3 py-2 bg-black/10 border-b-2 border-bright-blue rounded-md focus:scale-105 focus:shadow-md  focus:outline-none focus:shadow-light-blue lg:w-96 "/>
        </label>
    )
}