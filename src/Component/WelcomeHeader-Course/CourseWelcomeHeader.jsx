import React from 'react'
import Background from "./images/CourseWelcomeImage.png";
import './style.css'

function CourseWelcomeHeader() {
    return (
            <div className='welcome-container-course'>
                <div className='landing-background-course'>
                    <img src={Background} className='welcomebackground-course'/>
                    <div className='welcomebackground-surface-course align-middle'>
                        <h2 className='main-header-course align-middle'>2021 Grade 10 class</h2>
                        <h4 className='sub-header-course align-middle'>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Curabitur nec dignissim sem.
                            Donec sed justo rutrum, </h4>

                    </div>
                    <div className="button1-position">
                        <button className="button1">Sign Up Here</button>
                    </div>
                </div>
                <hr/>
            </div>

    )
}

export default CourseWelcomeHeader
