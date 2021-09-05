import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
import {useDispatch} from "react-redux";
import navImg from './Images/navImg.png';
import userIcon from './Images/userIcon.png';

function Navbar () {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const  handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const dispatch = useDispatch();

    const userIconImgCss = {
        height: 60,
        marginTop: '-10%',
        marginLeft: '90%'
    }
    const navImgCss  = {
        height: 60,
        marginTop: '-15%',
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
                <div className= "navbar-container">
                    <Link to = "/home" className ="navbar-logo" onClick={closeMobileMenu}>
                        <div >
                            <img src= {navImg}  style={navImgCss}/>

                        </div>
                    </Link>

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
                            <Link to= '' className ="nav-links" onClick={closeMobileMenu}>
                                ABOUT US
                            </Link>
                        </li>
                        <li className= "nav-item">
                            <Link to= '/tutordash' className ="nav-links" onClick={closeMobileMenu}>
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                    <Link to = "/navbarbuttoncomponent" className ="navbar-logo" onClick={closeMobileMenu}>
                        <div>
                            <img src= {userIcon}  style={userIconImgCss}/>

                        </div>
                    </Link>

                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;
