import React, {useEffect, useState} from 'react'
import './Navbar.css'
import navImg from "./Images/Picture2.png";
import navImg1 from "./Images/notification.png";
import NavBarButtonComponent from "./NavBarButtonComponent";
import NavBarButtonComponent2 from "./NavBarButtonComponent2";
import {useSelector} from "react-redux";

function LoggedUserComponent() {
    const [selected , setSelected] = useState(false)
    const [selected1 , setSelected1] = useState(false)
    //const [buttonPopup, setButtonPopup] = useState(false);

    const user1 = useSelector((state) => state?.userDetails1?.loginUser);

    const user = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    // const [username, setUsername] = useState(user);
    // const [emails, setEmail] = useState(email);
    // console.log('retrievedObject: ', user);
    console.log(user)
    console.log(email)

    const logNav = () => {
        setSelected(!selected)
    }
    const logNav2 = () => {
        setSelected1(!selected1)
    }
    return (
        <div className= "loggedUserComponent">
            <div className="loggedUserNameTile">
                <div className="title-component-1">
                    <h1 className="title-component-main-1">{user}</h1>
                    <h2 className="title-component-sub-1">{email}</h2>
                </div>
            </div>
            {/*<div className="loggedUserImage + (selected ? "expand" : "")" onClick={logNav}>*/}
            <div className="loggedUserImage" onClick={logNav}>
                <img src= {navImg} className ="navbar-logo"/>
            </div>

            <div className="loggedUserNotification" onClick={logNav2}>
                <img src= {navImg1} className ="navbar-logo"/>
            </div>
            <NavBarButtonComponent trigger={selected} setTrigger = {setSelected}/>
            <NavBarButtonComponent2 trigger={selected1} setTrigger = {setSelected1}/>
        </div>
    )
}

export default LoggedUserComponent
