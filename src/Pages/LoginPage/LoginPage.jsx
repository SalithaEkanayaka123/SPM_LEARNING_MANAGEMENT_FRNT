import React, {useEffect, useState} from 'react'
import Login from "../../Component/Login/Login";
import LoginComponent from "../../Component/Login/LoginComponent";
import './style.css'
import ClassTile from "../../Component/Class/ClassTile/ClassTile";
import Footer from "../../Component/Footer/Footer";
import {useDispatch} from "react-redux";
import {fetchStudents, fetchTeachers, getUserCount} from "../../Action/Users";

function LoginPage() {

    const [background, setBackground] = useState('#D6D6D6');
    return (
        <div  className="background-log">
            <Login setBackground = {setBackground}/>
            <div className='row sub-footer1'>Lerning Managemnt System v1.0 || All Rights Received.</div>
        </div>
    )
}

export default LoginPage
