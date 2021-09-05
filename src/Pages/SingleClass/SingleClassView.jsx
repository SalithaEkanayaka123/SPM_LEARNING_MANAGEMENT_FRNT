import React from 'react'
import CourseWelcomeHeader from "../../Component/WelcomeHeader-Course/CourseWelcomeHeader";
import SingleClassViewBackground from "./SingleClassViewBackground";
import CourseContent from "../../Component/CourseContent/CourseContent";
import Footer from "../../Component/Footer/Footer";
function SingleClassView() {
    return (
        <div>
            <CourseWelcomeHeader/>
            <SingleClassViewBackground/>
            <CourseContent/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default SingleClassView
