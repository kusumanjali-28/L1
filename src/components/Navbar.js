import { Link } from "react-router-dom"

import './Navbar.css'
function Navbar() {

    
    return (
        <div className="nav">
         <Link to="/Register">   <button  >Register here</button></Link>
         <Link to="/Login">   <button  >Login</button></Link>
         <Link to="/MainAdmin">   <button >Admin</button></Link>
         <Link to="/HospitalForm">   <button >Hotel Booking</button></Link>
        
        </div>
    )
}

export default Navbar