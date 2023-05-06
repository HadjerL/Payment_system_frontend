import done from '../images/undraw_pay_online_re_aqe6 1.svg'
import Buttoncomp from '../common/Buttoncomp'

export default function paymentfailed(){
    return (
            <div>
                <div className="  w-72 flex flex-col gap-5 items-center text-center bg-light-gray rounded-md p-7 shadow-md  lg:px-40 ">
            <h2 className="font-poppins w-52 text-bright-blue font-bold text-xl">Payment done</h2>
                <div className='sm:w-60 sm:h-60'>
                    <img src={done} alt="credit card" />
                </div>
                <Buttoncomp call = 'Go to home'></Buttoncomp>
            </div>
        </div>
    )
}