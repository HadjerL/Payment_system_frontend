import Logincard from "./Logincard"
export default function loginpage() {
    const inputs = [{label:'NSS',type:'text'},{label:'First Name',type:'text'},{label:'Last Name',type:'text'},{label:'Email',type:'text'}];
    return (
        <div className="flex justify-center items-center">
            <Logincard inputs = {inputs}>
            </Logincard>
        </div>
    )
}