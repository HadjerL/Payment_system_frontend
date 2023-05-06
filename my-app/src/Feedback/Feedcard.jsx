
import Inputcomp from '../common/Inputcomp'
import Buttoncomp from '../common/Buttoncomp'
export default function feedbackcard(props){
    return(
        <div>
            <div className="flex flex-col items-center bg-light-gray w-max rounded-md p-7 shadow-md lg:px-40 ">
            <h1 className="font-poppins text-bright-blue font-bold text-3xl ">Feedback</h1>
            <form action="" className="flex flex-col items-center gap-4">
                {props.inputs.map(input =>{
                    return <Inputcomp label = {input.label} type = {input.type}></Inputcomp>
                })}
                <Buttoncomp call = 'Send feedback'></Buttoncomp>
            </form>
        </div>
        </div>
    )
}