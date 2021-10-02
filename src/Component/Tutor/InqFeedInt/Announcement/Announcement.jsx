import React, {useState} from 'react'
import './Announcement.css'
import CustomButton from "../../CourseMgntInt/CustomButtons/CustomButton";
import axios from "axios";
function Announcement() {

    const [postData, setPostData] = useState({
        heading: '',
        body: ''
    });

    //Dummy method
    const printValue = (e) => {
        e.preventDefault();
        console.log('Printed with Different button')
    }

    //State for saving the response after sending the announcement.
    const [response, setResponse] = useState(null);
    //Announcement posting method.
    const postAnnouncement = (e) => {
        //Avoid page refreshing
        e.preventDefault();

        // Validation
        if (!postData.heading || !postData.body) {
            console.log("Error postData Null")
            console.log(postData);
            return;
        }
        console.log(postData);

        axios.post('http://localhost:8073/api/announcement', postData)
            .then(response => setResponse({ articleId: response.data.id }))
            .catch(error => {
                setResponse({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }


    return (
        <div className="announcement-container">
            <div className="announcement-header">
                <div className="section-header light">
                    Announcements
                </div>
                <div className="second-header">
                    Latest
                </div>
                <div className="announcement-body">
                    <div className="input-form-container">
                    <form className="form">
                        <label> Heading</label>
                        <div>
                            <input type="text" id="fname" name="firstname"
                                   placeholder="Announcement Heading Comes here..." className="form-input"
                                   value={postData.heading}
                                   onChange={(e) => setPostData({...postData, heading: e.target.value})}
                                   required={true}/>
                        </div>
                        <label> Body</label>
                        <div>
                            <textarea id="fname" name="firstname" placeholder="Announcement body comes here..."
                                  className="form-area"
                                      value={postData.body}
                                      onChange={(e) => setPostData({...postData, body: e.target.value})}
                                      required={true}/>
                        </div>
                        <div className="announcement-body-button-group">
                            <div className="announcement-button">
                                <CustomButton type={"reset"} name={"Discard"} color={"#FF5050"}/>
                            </div>
                            <div className="announcement-button">
                                <CustomButton revokeMethod={postAnnouncement} name={"Send"} color={"#e4bf5e"}/>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Announcement
