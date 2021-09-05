import React from 'react'
import './ClassAnnouncement.css'
import CustomButton from "../../../Tutor/CourseMgntInt/CustomButtons/CustomButton";

function ClassAnnouncement(){
    return (
        <div className="class-announcement-container">
            <div className="class-announcement-header">
                <div className="class-announcement-section-header light">
                    Announcements
                </div>
                <div className="class-announcement-second-header">
                    Latest
                </div>
                <div className="class-announcement-body">
                    <div className="input-form-container">
                        <form className="form">
                            <label> Heading</label>
                            <div>
                                <input type="text" id="fname" name="firstname"
                                       placeholder="Announcement Heading Comes here..." className="form-input"/>
                            </div>
                            <label> Body</label>
                            <div>
                            <textarea type="text" id="fname" name="firstname" placeholder="Announcement body comes here..."
                                      className="form-area"/>
                            </div>
                            {/*<div className="form-input">*/}
                            {/*    <select*/}
                            {/*        className="form-input"*/}
                            {/*        aria-label="Default select example"*/}
                            {/*        // value={classData.teacher}*/}
                            {/*        //onChange={(e) => setClassData({...classData, tutorName: e.target.value})}*/}
                            {/*        required*/}
                            {/*    >*/}
                            {/*        <option selected>Choose...</option>*/}
                            {/*        <option value="1">D.K.L.WEERSINGHE</option>*/}
                            {/*        <option value="2">T.K.L.CHANDRASENA</option>*/}
                            {/*        <option value="3">M.N.V.RATHNAYAKA</option>*/}
                            {/*        <option value="4">H.K.L.VEERSINGHE</option>*/}
                            {/*        <option value="5">K.N.V.PERERA</option>*/}
                            {/*    </select>*/}
                            {/*</div >*/}
                            <div className="class-announcement-body-button-group">
                                <div className="class-announcement-button">
                                    <CustomButton name={"Discard"} color={"#FF5050"}/>
                                </div>
                                <div className="class-announcement-button">
                                    <CustomButton name={"Send"} color={"#e4bf5e"}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassAnnouncement