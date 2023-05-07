
import Inputcomp from '../common/Inputcomp'
import Buttoncomp from '../common/Buttoncomp'
import Cancelbutton from '../common/Cancelbutton'
import { useNavigate } from 'react-router-dom'

export default function Feedbackcard(props){
    const navigate = useNavigate();
    return(
        <div>
            <div className="flex flex-col items-center bg-light-gray w-max rounded-md p-7 shadow-md lg:px-40 ">
            <h1 className="font-poppins text-bright-blue font-bold text-3xl ">Feedback</h1>
            <form action="" className="flex flex-col items-center gap-4">
                {props.inputs.map(input =>{
                    return <Inputcomp label = {input.label} type = {input.type}></Inputcomp>
                })}
                <Buttoncomp call = 'Send feedback' handler= {()=>navigate('/feedback-sent')}></Buttoncomp>
                <Cancelbutton></Cancelbutton>
            </form>
        </div>
        </div>
    )
}