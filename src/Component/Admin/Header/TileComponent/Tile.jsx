import React from 'react'
import "./TileStyles.css"
import ClassRoom from '../Images/class.png'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
function Tile({name, count}) {
    return (
        <div className="admin-header-card">
            <p className="admin-card-header"> {name}</p>
            <p className="admin-card-price"> {count} </p>
            {/*<p><PermContactCalendarIcon classes="admin-card-image"/> </p>*/}
            <img src={ClassRoom} className="admin-card-image"></img>
            {/*<PermContactCalendarIcon style={{fontSize:"larger"}}/>*/}
            {/*<img src="" alt="icon-name"/>*/}
        </div>
    )
}
export default Tile
