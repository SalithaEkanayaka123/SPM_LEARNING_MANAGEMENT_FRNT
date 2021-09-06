import React from 'react'
import "./InqPopUpMenu.css"
function InqPopUpMenu({body, trigger, setTrigger, children, triggerHeader}) {
    return (trigger) ? (
        <div className="inquiry-popup-menu-container">
            <div className="inquiry-popup-container-header">
                Student Inquiries.
            </div>
            <div className="inquiry-popup-menu-body">
                <div className="inquiry-popup-menu-header">
                    {/*{triggerHeader.header}*/} Kamal
                </div>
                <div className="inquiry-popup-menu-description">
                    {/*{triggerHeader.description}*/} Description
                </div>
            </div>
            <div className="inquiry-popup-menu-form">
               <form>
                   <label className="label-dark" htmlFor="fname">Title</label>
                   <input type="text" id="fname" name="firstname" placeholder="Your name.."
                          className="form-input"
                   />

                   <label className="label-dark" htmlFor="lname">Description</label>
                   <input type="text" id="lname" name="lastname" placeholder="Description.."
                          className="form-input"
                   />
                   <button className="close-btn"> Send </button>
                   <button className="close-btn" onClick={() => setTrigger(false)}>Close</button>
               </form>

                {children}
            </div>

        </div>
    ) : "";
}

export default InqPopUpMenu;
