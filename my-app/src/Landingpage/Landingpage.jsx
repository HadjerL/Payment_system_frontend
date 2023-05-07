import credit from '../images/undraw_credit_card_re_blml.svg'
import feedback from '../images/undraw_feedback_re_urmj.svg'
import { useNavigate } from 'react-router-dom'

export default function Landigpage(props){
    const navigate = useNavigate();
    return(
        <div className='flex flex-wrap justify-center items-center gap-5 sm:gap-14'>
            <button onClick={()=>navigate('/payment')} className="  w-72 flex flex-col gap-5 items-center text-center bg-light-gray rounded-md p-7 shadow-md lg:px-40 focus:outline-none focus:scale-105 focus:shadow-lg">
                <h2 className="font-poppins w-52 text-bright-blue font-bold text-xl">I came to pay</h2>
                <div className='sm:w-60 sm:h-60'>
                    <img src={credit} alt="credit card" />
                </div>
            </button>
            <button onClick={()=>navigate('/feedback')} className="  w-72 flex flex-col gap-5 items-center text-center bg-light-gray rounded-md p-7 shadow-md lg:px-40 focus:outline-none focus:scale-105 focus:shadow-lg">
                <h2 className="font-poppins w-52 text-bright-blue font-bold text-xl">I came to give my feedback</h2>
                <div className='sm:w-52 sm:h-52'>
                    <img src={feedback} alt="credit card" />
                </div>
            </button>
            
        </div>
    )
}