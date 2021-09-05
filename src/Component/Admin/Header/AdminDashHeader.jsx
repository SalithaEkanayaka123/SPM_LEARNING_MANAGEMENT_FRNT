import React from 'react'
import "./AdminDashHeader.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Tile from "./TileComponent/Tile";
import customerImage from "./Images/customer1.svg";
import FaceIcon from '@material-ui/icons/Face';
function AdminDashHeader() {
    return (

        <React.Fragment>
            <div className="admin-header-component ">
                <div className="admin-section-header">Overview Dashboard.</div>
                <div >
                    <div className="row container-row row-cols-auto justify-content-center">
                        <div className="col">
                        <Tile name={"Total Students"} count={"5000"}/>
                        {/*<img className="card-img" src={customerImage} alt="Card image cap"/>*/}
                        </div>
                        <div className="col"><Tile name={"Total Teacher"} count={"200"}/></div>
                        <div className="col"><Tile  name={"Total Income"} count={"100,000"} /> </div>
                    </div>
                    <div className="row container-row row-cols-auto justify-content-center">
                        <div className="col"><Tile name={"Total Announcements"} count={"100"}/></div>
                        <div className="col"><Tile name={"Total Classrooms"} count={"20"}/></div>
                        <div className="col"><Tile name={"Total Courses"} count={"50"}/></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AdminDashHeader