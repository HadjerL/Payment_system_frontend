import {create_payement} from 'chargily-epay-react-js'
import Inputcomp from '../common/Inputcomp'
import Buttoncomp from '../common/Buttoncomp'
import Cancelbutton from '../common/Cancelbutton'

function App(props) {
    const handleClick = async()=>{

    const invoice = {
        "amount":600,
        "invoice_number":23,
        "client":"Ahmed malek", // add a text field to allow the user to enter his name, or get it from a context api (depends on the project architecture)
        "mode":"CIB",
        "webhook_url":"https://your_beeceptor_url.free.beeceptor.com", // here is the webhook url, use beecptor to easly see the post request and it's body, you will use this in backened to save and validate the transactions.
        "back_url":"https://www.youtube.com/", // to where the user will be redirected after he finish/cancel the payement 
        "discount" :0
    }
    try {
        await create_payement(invoice);
    } catch (error) {
      // handle your error here 
        console.log(error)
    }
    }


    return (
        <div className="flex flex-col items-center bg-light-gray w-max rounded-md p-7 shadow-md lg:px-40 ">
            <h1 className="font-poppins text-bright-blue font-bold text-3xl ">Paying</h1>
            <form action="" className="flex flex-col items-center gap-4">
                {props.inputs.map(input =>{
                    return <Inputcomp label = {input.label} type = {input.type}></Inputcomp>
                })}
                <Buttoncomp call = 'Pay now' onClick={handleClick}>testing</Buttoncomp>
                <Cancelbutton></Cancelbutton>
            </form>
        </div>
    );
}

export default App;
