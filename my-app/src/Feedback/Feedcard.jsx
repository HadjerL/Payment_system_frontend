
import Inputcomp from '../common/Inputcomp'
import Buttoncomp from '../common/Buttoncomp'
import Cancelbutton from '../common/Cancelbutton'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Feedbackcard(props){
    const [nss, setNss] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    return(
        <div>
            <div className="flex flex-col items-center bg-light-gray w-max rounded-md p-7 shadow-md lg:px-40 ">
            <h1 className="font-poppins text-bright-blue font-bold text-3xl ">Feedback</h1>
            <form action="" className="flex flex-col items-center gap-4">
                <Inputcomp handlechange={(event)=>setNss(event.target.value)} label = 'NSS' type = 'number'></Inputcomp>
                <Inputcomp handlechange={(event)=>setEmail(event.target.value)} label = 'Email' type = 'email'></Inputcomp>
                <Inputcomp handlechange={(event)=>setFeedback(event.target.value)} label = 'Feedback' type = 'text'></Inputcomp>
                <Buttoncomp call = 'Send feedback' handler= {()=>{navigate('/feedback-sent');console.log(nss,email,feedback)}}></Buttoncomp>
                <Cancelbutton></Cancelbutton>
            </form>
        </div>
        </div>
    )
}