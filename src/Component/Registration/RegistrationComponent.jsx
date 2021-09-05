import React, {useState} from 'react'
import './Registration.css'
import {useDispatch, useSelector} from "react-redux";
import {addUsers, loginUserValidation} from "../../Action/Users";
import {useHistory} from "react-router";
import CustomAlert from "../CustomAlert/CustomAlert";
import EmailUpdateComponent from "../Profile/EmailUpdateComponent";
import SucessPopUp from "../PopupModel/SucessPopUp";

function   RegistrationComponent() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [type, setType] = useState('teacher');
    const [password, setPassword] = useState();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupName, setPopupName] = useState("");
    const [popupLocation, setPopupLocaion] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();


    function SubmitPressed(e) {
        e.preventDefault();

        let status = "";
        if (type == 'student'){
            status = 'valid';
        }
        if(type == 'teacher'){
            status = 'valid';
        }
        const newUser = {
            name,
            email,
            username,
            status,
            password,
            type,
        }
        console.log(newUser);
       dispatch(addUsers(newUser));
       const response = useSelector((state) => state.userDetails1.UserDetails);
       console.log(response);
       //  setPopupName("register");
       // setPopupLocaion("/login");
       //  setButtonPopup(true);

    }



    return (
        <div>
            <div className="registration">
                <SucessPopUp trigger={buttonPopup} setTrigger = {setButtonPopup} name1 = {popupName} name2 = {popupLocation}></SucessPopUp>
            </div>
            <form onSubmit={SubmitPressed}>
                <div className="registration-info4">
                    <h2 className="registration-info4-main">Registration</h2>
                    <h4 className="registration-info4-second">Register to get access to premium features and discounts</h4>
                </div>

                <div className="registration-body">
                    <div>
                        <lable className="input-wrapper">Name</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Name..."
                               type="text"
                               onChange = {(e) =>{
                                   setName(e.target.value);
                               }}
                               required
                        />
                        <br/>
                    </div>
                    <div>
                        <lable className="input-wrapper">Email</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Email..."
                               type="email"
                               onChange = {(e) =>{
                                   setEmail(e.target.value);
                               }}
                               required
                        />
                    </div>
                    <div>
                        <lable className="input-wrapper">User Name</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Username..."
                               type="text"
                               onChange = {(e) =>{
                                   setUsername(e.target.value);
                               }}
                               required
                        />
                    </div>
                    <div>
                        <lable className="input-wrapper">Password</lable><br/>
                        <input className="input-field"
                               placeholder="Enter Password..."
                               type="password"
                               onChange = {(e) =>{
                                   setPassword(e.target.value);
                               }}
                               required
                        />
                    </div>
                    <div>
                        <lable className="input-wrapper">User Type</lable><br/>
                        <input type="radio" id="teacher" name="fav_language" value="teacher" className="input-field1"
                               onChange = {(e) =>{
                                   setType(e.target.value);
                               }}/>
                        <label htmlFor="teacher">Teacher</label><br/>
                        <input type="radio" id="student" name="fav_language" value="student" className="input-field1"
                               onChange = {(e) =>{
                                   setType(e.target.value);
                               }}/>
                        <label htmlFor="student">Student</label>
                    </div><br/>

                    <div className="registration-button-group">
                        <button className="registration-button" type="submit">Register</button><br/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegistrationComponent
