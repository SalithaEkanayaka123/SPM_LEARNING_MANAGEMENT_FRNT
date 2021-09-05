import React, {useState} from 'react'
import "./HomeLanding.css"

import CustomizeSection from "./CustomizeSection/CustomizeSection";
import ClassTile from "../Class/ClassTile/ClassTile";
import PaymentForm from "../Payment/PaymentForm";
import WelcomeHeader from "./WelcomeHeader/WelcomeHeader";
import Footer from "../Footer/Footer";
import GetUpdates from "./GetUpdates/GetUpdates";
import TutorSection from "./TutorSection/TutorSection";

import CourseWelcomeHeader from "../WelcomeHeader-Course/CourseWelcomeHeader";

import PopupModel from "../PopupModel/PopupModel";
import CourseTile from "../Class/CourseTile/CourseTile";

import Booksontop from '../Class/CourseTile/Image/booksonTop.svg'
import Book2 from '../Class/CourseTile/Image/book2.svg'
import Book6 from '../Class/CourseTile/Image/books6.svg'



function HomeLanding() {

    const [show, setshow] = useState(false)

    return (
        <div>
            <div className='ash-background'>
                <WelcomeHeader/>
                <CustomizeSection main_topic={'Top Courses'} sub_topic={'Latest and Best selling courses, Enroll now for the full life time access.'} textcolor={'#717171'}backgroundcl={'#D6D6D6'} btn_text={'View All'} btn_color={'#8340F4'}>
                    <CourseTile image={Booksontop}/>
                    <CourseTile image={Book2}/>
                    <CourseTile image={Book6}/>
                    <CourseTile image={Booksontop}/>
                    <CourseTile image={Book6}/>
                    <CourseTile image={Book2}/>
                    <CourseTile image={Booksontop}/>
                </CustomizeSection>
            </div>
            <div className='dark-ash-background'>
                <CustomizeSection main_topic={'Classes'} sub_topic={'Latest Classes, Enroll now for the full life time access.'} backgroundcl={'#ADA6CE'} btn_text={'View All'} btn_color={'#8340F4'} navigationPath={'class'}>
                    <ClassTile/>
                    <ClassTile/>
                    <ClassTile/>
                    <ClassTile/>
                    <ClassTile/>
                </CustomizeSection>
                <TutorSection/>
            </div>
            <GetUpdates/>
            <Footer/>
        </div>
    )
}

export default HomeLanding
