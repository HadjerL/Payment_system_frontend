import Feedbackcad from './Feedcard'
export default function feedbackpage(){
    const inputs = [{ label:'NSS', type:'text' }, { label:'Email', type:'email' } , { label:'Feedback', type:'text' } ];
    return(
        <div>
            <Feedbackcad inputs = {inputs} ></Feedbackcad>
        </div>
    )
}