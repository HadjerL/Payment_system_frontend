import Loginpage from "./Login/Loginpage"
import Landingpage from './Landingpage/Landingpage'
import Paymentpage from './Paymentthing/Payingpage'
import Paymentdonepage from "./Paymentthing/Paymentdonepage"
import Paymentfailedpage from "./Paymentthing/Paymentfailedpage"
import Feedbackpage from './Feedback/Feedpage'
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Loginpage/>}></Route>
        <Route path="/home" element = {<Landingpage/>}></Route>
        <Route path="/payment" element = {<Paymentpage/>}></Route>
        <Route path="/payment-done" element = {<Paymentdonepage/>}></Route>
        <Route path="/payment-failed" element = {<Paymentfailedpage/>}></Route>
        <Route path="/feedback" element = {<Feedbackpage/>}></Route>
    </Routes>
  )
}