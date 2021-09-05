import React from 'react'
import './sucesspopupStyle.css'
import OK from "./Images/check.png";
import {useHistory} from "react-router";
// import cancel from "./images/cancel (1).png";
// import profilePic from "../../Pages/StudentProfilePage/images/profilePic.png";
function SucessPopUp(props) {

    const history = useHistory();
    const popupView = () => {
        history.push(props.name2);
        props.setTrigger(false)

    }
    // return (props.trigger) ? (
    return (props.trigger) ? (
        <div>
            <div className="modal-confirm">
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                            <div className="modal-header d-flex justify-content-center">
                                <div>
                                    <img src= {OK}  className="icon-box"/>
                                    {/*<i className="material-icons">&#xE876;</i>*/}
                                </div>
                                <div className="success-main-1">
                                    <h1 className="success-main modal-title ">Success!</h1>
                                </div>

                            </div>
                            <div className="modal-body">
                                <h5 className="text-center">You successfully {props.name1} to the System</h5>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success btn-block w-100" data-dismiss="modal" onClick={popupView}>OK</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

) : <div></div>;
}

export default SucessPopUp
