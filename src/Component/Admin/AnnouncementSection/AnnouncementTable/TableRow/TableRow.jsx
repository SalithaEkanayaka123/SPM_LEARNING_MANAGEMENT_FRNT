import React from 'react'
import "./TableRow.css"

function RowComponent({header, description}) {
    return (
        <div className="class-announcement-custom-row-container">
            <div className="class-announcement-custom-row-flex">
                <div>
                    <div className="class-announcement-custom-row-header">{header}</div>
                    <div className="class-announcement-custom-row-description">{description}</div>
                </div>
                <div className="class-announcement-custom-row-posted-time">34 mins ago</div>
                {/*<div>*/}
                {/*    <button>Remove</button>*/}
                {/*</div>*/}
            </div>
            <div className="class-announcement-custom-row-container-line"/>
        </div>
    )
}

export default RowComponent