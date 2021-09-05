import React from 'react'
import Tweete from './tweet.svg'
import whatsapp from './whatsapp.svg'
import Youtube from './youtube.svg'
import Facebook from './facebook.svg'
import Linkedin from './linkedin.svg'
import "./styles.css"

function Footer() {
    return (
        <div className='footer-container'>
            <div className='row'>
                <div className='col-lg-3 col-md-3'>
                    <div className='footer-main-header'>About Us</div>
                    <div className='text-area-continer'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec dignissim sem. Donec sed justo rutrum, vehicula elit a, pulvinar sem. Proin convallis, orci vel blandit luctus, massa lectus blandit neque, sit amet pharetra libero lacus et arcu. Donec placerat lacinia nunc vel faucibus.
                    </div>
                </div>
                <div className='col-lg-3 col-md-3'>
                    <div className='footer-main-header'>Join with us</div>
                    <div className='footer-btn-wrapper'>
                        <button className='register-now-btn'>Sign Up Here</button>
                    </div>

                </div>
                <div className='col-lg-3 col-md-3'>
                    <div className='footer-main-header'>Links</div>
                    <div className='link-warpper'>
                        <ul>
                            <li>Home</li>
                            <li>Classes</li>
                            <li>My Profile</li>
                            <li>Contact us</li>
                            <li>About us</li>
                        </ul>
                        <ul>
                            <li>Login</li>
                            <li>Register</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='row sub-footerx'>
                <div className='social-media-container'>
                    <img src={Youtube}/>
                    <img src={whatsapp}/>
                    <img src={Tweete}/>
                    <img src={Linkedin}/>
                    <img src={Facebook}/>
                </div>
                <div className='text-area-continer'>Follow us on social media</div>
            </div>
            <div className='row sub-footer'>Lerning Managemnt System v1.0 || All Rights Received.</div>
        </div>
    )
}

export default Footer
