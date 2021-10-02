import React, {useEffect, useState} from 'react'
import './UserProfile.css'
import profilePic from "./images/profilePic.png";
import ProfileBio from "../../Component/Profile/ProfileBio";
import UserDetailsUpdateComponent from "../../Component/Profile/UserDetailsUpdateComponent";
import {deleteUsers, fetchStudents, fetchTeachers, fetchUser, getUserByID, loggedUser} from "../../Action/Users";
import {useDispatch, useSelector} from "react-redux";
import PasswordUpdateComponent from "../../Component/Profile/PasswordUpdateComponent";
import {Button, Modal} from "react-bootstrap";
import UserTransarction from "../../Component/Transaction/UserTransarction/Transaction";
import AuthClass from "../../Validation/AuthClass";
import {useHistory} from "react-router";


const UserProfile = () => {
    const dispatch = useDispatch();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [popupName, setPopupName] = useState("");;
    const history = useHistory();
    const response = useSelector((state) => state.userDetails1?.editDetail?.data);
    let userObject = localStorage.getItem("user")
    let user = JSON.parse(userObject)
    const user1 = useSelector((store) => store.userDetails1?.loginUser);
    console.log('12333', user1)
    let id = localStorage.getItem("userid");

    const [result, setResult] = useState(response);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        dispatch(loggedUser(response))
    },[response])

    useEffect(() => {
        dispatch(getUserByID(user?.id));

    },[])


    const updateEmail = () => {
        setButtonPopup(true);
        setPopupName("Email");
    }
    const updatePassword = () => {
        setButtonPopup1(true);
        setPopupName("Password");
    }
    const deleteAccount = () => {
        dispatch(deleteUsers(id))
        setTimeout(function(){
            dispatch(fetchUser());
            AuthClass.logout()
            history.push('/login');
        }, 1000);

    }


    return (<React.Fragment>
            <div>
                <div className="bluescreen">
                </div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Do you really want to delete account.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            No
                        </Button>
                        <Button variant="primary" onClick={deleteAccount}>Yes</Button>
                    </Modal.Footer>
                </Modal>
                <div className="bluescreen1">
                <ProfileBio user1 = {user1}/>
                <UserTransarction type ={ user1?.type === 'student' ? 'Card' : 'Bank'}  />
                </div>
                <div className="userprofile">
                    <div className="userprofile1">
                        <img src= {profilePic}  className="profilePic"/>
                        <div className="popupInterfaceUpdateEmail">
                            <UserDetailsUpdateComponent trigger={buttonPopup} setTrigger = {setButtonPopup} name = {result} name1 = {popupName} buttonPopup2 = {buttonPopup2} setButtonPopup2 = {setButtonPopup2}></UserDetailsUpdateComponent>
                            <PasswordUpdateComponent trigger={buttonPopup1} setTrigger = {setButtonPopup1} name = {popupName}></PasswordUpdateComponent>
                        </div>
                        <div className="userprofile1-info">
                            <h2 className="userprofile1-info-main">Taneesha</h2>
                            <div className="profitable-group">
                                <button className="userprofile-button1" onClick={updateEmail}>Update My Personal Details</button><br/>
                                {/*<button className="userprofile-button1" onClick={updatePassword}>Update Password</button><br/>*/}
                                <button className="userprofile-button1">My Transactions</button><br/>
                                <button  className="userprofile-button2" onClick={handleShow}>Delete My Account</button><br/>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
    </React.Fragment>

    )
}

export default UserProfile
