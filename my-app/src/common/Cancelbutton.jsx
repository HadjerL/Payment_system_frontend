import {useNavigate} from 'react-router-dom'

export default function Cancelbutton(){
    const navigate = useNavigate();
    return (
        <button onClick={()=>navigate('/home')} type="submit" className="flex flex-col w-full justify-center items-center bg-black/30 text-black font-bold rounded-md py-2 sm:w-60 ">
            Cancel
        </button>
    )
}