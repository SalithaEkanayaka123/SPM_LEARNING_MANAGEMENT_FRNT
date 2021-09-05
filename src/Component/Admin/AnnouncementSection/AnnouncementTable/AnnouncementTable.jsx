import React from 'react'
import './AnnouncementTable.css'
import TableRow from "./TableRow/TableRow";

function AnnouncementTable({array}) {
    return (
        <div className="announcement-table-container">
            <div className="announcement-table-header">
                <div className="announcement-table-section-header light">
                    Announcements Details
                </div>
                <div className="announcement-table-second-header">
                    Latest
                </div>
            </div>

            <div className="announcement-table-body">
                {array.map((item) => (
                    <TableRow header={item.header} description={item.description}/>
                ))}
            </div>
        </div>
    )
}
export default AnnouncementTable