import React from 'react'
import "./FileAttachInt.css"
import FileAttachmentTable from "./FileAttachmentTable/FileAttachmentTable";
function FileAttachInt({array4}) {
    return (
        <div>
            <div className="file-component">
                <div className="input-form-container">
                    <form className="form">
                        <div className="course-component-header">
                            <div className="section-header">Course Form</div>
                            <div className="second-header">Course Form</div>
                        </div>

                        <label htmlFor="fname">Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."
                               className="form-input"/>

                        <label htmlFor="lname">Number of Chapters</label>
                        <input type="text" id="lname" name="lastname" placeholder="Number of Chapters.."
                               className="form-input"/>

                        <label htmlFor="lname">Price</label>
                        <input type="text" id="lname" name="lastname" placeholder="Price.." className="form-input"/>

                        <label htmlFor="lname">Description</label>

                        <input type="text" id="lname" name="lastname" placeholder="Description.."
                               className="form-input"/>

                        <div className="course-button-group button-row">
                            <button className="add-button">Add</button>
                            <button className="light-button">Reset</button>
                        </div>
                    </form>
                </div>
                <div className="file-table">
                    <div className="section-header dark-header"> Active Courses </div>
                    <div id="style-1" className="file-table-body-scrollable">
                        <FileAttachmentTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FileAttachInt
