import Inputcomp from '../common/Inputcomp'
import Button from '../common/Buttoncomp'
import {useNavigate} from 'react-router-dom'

export default function Login(props){
    const navigate = useNavigate();
    return(
        <div className="flex flex-col items-center bg-light-gray w-max rounded-md p-7 shadow-md lg:px-40 ">
            <h1 className="font-poppins text-bright-blue font-bold text-3xl ">Login</h1>
                <form action="" className="flex flex-col items-center gap-4">
                    {props.inputs.map(input =>{
                        return <Inputcomp label = {input.label} type = {input.type}></Inputcomp>
                    })}
                    <Button call = "Login" handler= {()=>navigate('/home')}></Button>
                </form>
        </div>
    )
}