import React from 'react'
import "./Inquiry.css"
import RowComponent from "../Feedback/RowComponent/RowComponent";
import InquiryCustomRow from "./InquiryCustomRow/InquiryCustomRow";
function Inquiry({array, setTrigger, setTriggerData, triggerData}) {
    return (
        <div className="inquiry-container">
            <div className="inquiry-header">
                <div className="section-header light">
                    Student Inquiries
                </div>
                <div className="second-header">
                    Latest
                </div>
            </div>
            <div className="inquiry-body">
                {array.map((item) => (
                    <InquiryCustomRow
                        header={item.header}
                        description={item.description}
                        setTrigger={setTrigger}
                        setTriggerData={setTriggerData}
                        triggerData={triggerData}
                    />
                ))}
            </div>
        </div>
    )
}

export default Inquiry
