import React from 'react'
import './styles.css'
import cancel from "./images/cancel (1).png";
import profilePic from "../../Pages/StudentProfilePage/images/profilePic.png";
function EmailUpdateComponent(props) {
    return (props.trigger) ? (
        <div className="background-userUpdate-1">
            <div className="background-userUpdate">
                <div className="emailupdatecomponent-bio">
                    <div className="emailupdatecomponent-bio1-info1">
                        <a><img src= {cancel}  className="EmailCancelLogo-image1" onClick={ () => props.setTrigger(false)}/></a>
                        <img src= {profilePic}  className="profilePic-emailUpdate"/>

                        <div className="emailupdatecomponent-bio1-info2">
                            <h2 className="emailupdatecomponent-bio1-info2-main">User's new {props.name} Update</h2>
                            <h4 className="emailupdatecomponent-bio1-info2-second">
                                Update Your New {props.name} Here
                            </h4>
                        </div>



                        <div className="emailupdatecomponent-bio1-info1-second">
                            <div>
                                <input className="input-field-updateemail"
                                       placeholder="Enter....."
                                       type="text"
                                />
                                <button type="submit" className="profileemailupdatebtn"> Update </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    ) : "";
}

export default EmailUpdateComponent
