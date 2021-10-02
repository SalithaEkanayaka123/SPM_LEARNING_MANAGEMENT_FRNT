import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import {useDispatch} from "react-redux";
import navImg from './Images/navImg.png';
import userIcon from './Images/Picture2.png';
import LoggedUserComponent from "./LoggedUserComponent";

function Navbar () {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const  handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const dispatch = useDispatch();
    let usertype = localStorage.getItem("usertype")

    const userIconImgCss = {
        height: "4vw",
        marginLeft: "-1%",
        marginTop: "-1.5%",
        left: 0,
        background: "white",
        borderRadius: 8
    }
    const navImgCss  = {

        marginTop: "-3%",
    }
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    const logout = () => {
        const user = {
            "userName": null,
            "userToken": null,
            "userType": null
        }
        localStorage.setItem('userName', user.userName);
    }

    return (
        <React.Fragment>
            <nav className= "navbar">
                <div className="navImg1">
                    <Link to = "/home"  onClick={closeMobileMenu}>
                        <div >
                            <img src= {navImg} className ="navbar-logo"/>

                        </div>
                    </Link>
                </div>
                <div className= "navbar-container">
                    <div className = "menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className= "nav-item">
                            <Link to= '/home' className ="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className= "nav-item">
                            <Link to= '/class' className ="nav-links" onClick={closeMobileMenu}>
                                CLASS
                            </Link>
                        </li>
                        <li className= "nav-item">
                            <Link to= '/profile' className ="nav-links" onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>

                        <li className= "nav-item">
                            <Link to= '/tutordash' className ="nav-links" onClick={closeMobileMenu}>
                                Tutor
                            </Link>
                        </li>
                    </ul>


                </div>
                <div className="navImg2">
                    <LoggedUserComponent/>
                </div>

            </nav>
        </React.Fragment>
    )
}

export default Navbar;
