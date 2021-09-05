import React from 'react'
import './Registration.css'
import LoginLogo from "./Images/RegistrationImg.png";
import RegistrationComponent from "./RegistrationComponent";
function Registration() {
    return (
        <div className="Outer-Registration">
            <div>
                <img src= {LoginLogo}  className="RegisterLogo-image1"/>
            </div>
            <div className="register">
                <div className="register1">
                    <RegistrationComponent/>
                </div>
            </div>
        </div>
    )
}
export default Registration
