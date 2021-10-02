import React, {useEffect} from 'react'
import HomeLanding from "../../Component/Home/HomeLanding";
import "./HomePage.css"
import {useDispatch} from "react-redux";
import {fetchStudents, fetchTeachers, getUserCount} from "../../Action/Users";

function HomePage() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getUserCount())
        dispatch(fetchTeachers());
        dispatch(fetchStudents());
    }, [])
    return (
        <div>
            <HomeLanding/>
        </div>
    )
}

export default HomePage;
