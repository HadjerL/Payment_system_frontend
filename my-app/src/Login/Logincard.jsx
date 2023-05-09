import Inputcomp from '../common/Inputcomp'
import Button from '../common/Buttoncomp'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

export default function Login(){
    const [nss, setNss] = useState(0);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    return(
        <div className="flex flex-col items-center bg-light-gray w-max rounded-md p-7 shadow-md lg:px-40 ">
            <h1 className="font-poppins text-bright-blue font-bold text-3xl ">Login</h1>
                <form action="" className="flex flex-col items-center gap-4">
                        <Inputcomp handlechange={(event)=>setNss(event.target.value)} label = 'NSS' type = 'number'></Inputcomp>
                        <Inputcomp handlechange={(event)=>setFirstName(event.target.value)} label = 'First Name' type = 'text'></Inputcomp>
                        <Inputcomp handlechange={(event)=>setLastName(event.target.value)} label = 'Last Name' type = 'text'></Inputcomp>
                        <Inputcomp handlechange={(event)=>setEmail(event.target.value)} label = 'Email' type = 'email'></Inputcomp>
                        <Button call = "Login" handler= {()=>{navigate('/home');console.log(nss,first_name,last_name,email)}}></Button>
                </form>
        </div>
    )
}