import Payingcard from './Payingcard'
export default function payingpage(){
    const inputs = [{ label:'NSS', type:'text' }, { label:'Email', type:'email' }, { label:'Amount', type:'number' } ,{ label:'Mode', type:'text' }, { label:'Comment', type:'text' } ];
    return(
        <div>
            <Payingcard inputs = {inputs}  ></Payingcard>
        </div>
    )
}