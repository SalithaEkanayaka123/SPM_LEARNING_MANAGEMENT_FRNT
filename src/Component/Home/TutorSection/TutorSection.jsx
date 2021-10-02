import React from 'react'
import './TutorSection.css'
import ProfileImage from "./ProfileImage/ProfileImage";
import Image from "./profile-images/profile-picutre.png";
import CustomButton from "../../Tutor/CourseMgntInt/CustomButtons/CustomButton";
import Tile1 from "../../Tutor/Header/TileComponent/Tile1";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

function Login() {

    //Testing Array for.
    const array3 = [
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"},
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"},
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"},
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"},
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"},
        {"header":"Kamal", "description":"New News Update available", "body":"This is the subject body"}];



    return (
        <div className="tutorial-home-section-container">
            <Container>
            <div className="tutorial-display-flex">

                <div className="tutorial-home-section-header">
                    <div className="main-heading">Tutors</div>
                    <div className="second-heading">Meet the best tutors who are contributing in our institute.</div>
                </div>
                <div className="custom-button-tutor-section"><CustomButton name={"View All"} color={"#E4BF5E"}/></div>
                </div>


            {/*Responsive container should come here. */}


            <Grid container>
                <div className="tutorial-home-section-body">
                    <div className="tutorial-home-section-body-res-layout">
                        {array3.slice(0, 5).map((item) => (
                            <ProfileImage image={Image} name={"Taneesha"} designation={"English Teacher"}/>
                        ))}
                    </div>
                </div>
            </Grid>
        </Container>
        </div>

    )
}

export default Login
