import React, {useEffect,useState} from 'react'
import "./AdminDashboard.css"
import AdminDashHeader from "../../Component/Admin/Header/AdminDashHeader";
import TeacherTableComponent from "../../Component/Admin/TeachersTable/TeacherTableComponent";
import ClassMgntInt from "../../Component/Admin/ClassMgntInt/ClassMgntInt";
import ClassDetailsTable from "../../Component/Admin/ClassTable/ClassDetailsTable";
import AnnouncementSection from "../../Component/Admin/AnnouncementSection/AnnouncementSection";
import AllTransations from "../../Component/Admin/AllTransations/AllTransations";
import {useHistory} from "react-router";
import {
    faBookOpen,
    faCommentAlt,
    faDollarSign,
    faPencilRuler,
    faSchool, faTimes, faUser,
    faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {fetchStudents, fetchTeachers, getUserCount} from "../../Action/Users";
import UserReports from "../../Component/Admin/AdminReports/UserReports";
import Button from "@progress/kendo-react-buttons/dist/es/Button";
import {Link} from "react-router-dom";
import Footer from "../../Component/Footer/Footer";


function AdminDashboard() {
    const [tableClass,setTableClass] = useState([]);
    let usertype = localStorage.getItem("usertype")
    const history = useHistory();
    const dispatch = useDispatch();
    //getUserCount
    const response = useSelector((state) => state.userDetails1?.usercount?.data);
    const teacherDetails = useSelector((store) => store.userDetails1?.UserDetails?.teacherRecords?.data);
    console.log(teacherDetails)
    useEffect(()=> {
        dispatch(getUserCount())
        dispatch(fetchTeachers());
    }, [usertype])



    useEffect(()=> {
        if(usertype != "admin"){
            history.push('./login')
        } else {
            //setFlag(true);
        }
    }, [])


    const Arrayx  = [
        {"tid":"T001", "date":"2021/10/1","amount":"10000.00", "description":"Course payment", "doneby":"STU001", "type":"income","courseid":"C001" },
        {"tid":"T002", "date":"2021/10/1","amount":"500.00", "description":"material pay", "doneby":"STU002", "type":"income","courseid":"C001" },
        {"tid":"T003", "date":"2021/10/1","amount":"1500000.00", "description":"Teacher salary", "doneby":"AD001", "type":"expence","courseid":"C001" },
        {"tid":"T004", "date":"2021/10/1","amount":"10000.00", "description":"Course payment", "doneby":"STU002", "type":"income","courseid":"C001" },
        {"tid":"T005", "date":"2021/10/1","amount":"10000.00", "description":"Course payment", "doneby":"STU003", "type":"income","courseid":"C001" },
        {"tid":"T006", "date":"2021/10/1","amount":"500.00", "description":"material pay", "doneby":"STU002", "type":"income","courseid":"C001" },
        {"tid":"T007", "date":"2021/10/1","amount":"1500000.00", "description":"Teacher salary", "doneby":"AD001", "type":"expence","courseid":"C002" }
    ]

    //Array for the announcement component.
    const array1 = [
        {"header":"Announcement 1", "description":"New News Update available"},
        {"header":"Announcement 2", "description":"New News Update available"},
        {"header":"Announcement 3", "description":"New News Update available"},
        {"header":"Announcement 4", "description":"New News Update available"},
        {"header":"Announcement 5", "description":"New News Update available"},
        {"header":"Announcement 6", "description":"New News Update available"}];

    const array2 =[
        {"header":"Total Student:", "count":response?.at(1), "image": faUserFriends},
        {"header":"Total Teacher", "count":response?.at(0), "image": faUser},
        // {"header":"To", "count":"6", "image": faBookOpen},
        // {"header":"Class", "count":"5", "image": faSchool},
        {"header":"Total Income", "count":"LKR 1256.23", "image": faDollarSign},
        {"header":"Total Announcements", "count":"10", "image": faCommentAlt},
        {"header":"Total Classrooms", "count":"23", "image": faSchool},
        {"header":"Total Courses", "count":"6", "image": faBookOpen},
    ];

    return (
        <div className="admin-dashboard-page">
            <AdminDashHeader array1={array2}/>
            <div className="Class-Admin">
                <ClassMgntInt/>
                <ClassDetailsTable method={setTableClass}/>
            </div>
            <AllTransations  response={Arrayx}/>
            <br/>
            <TeacherTableComponent teacherdetails = {teacherDetails}/>
            <br/>
            <UserReports/>
            <br/>
            <AnnouncementSection array1={array1}/>

            <div className="report-section">

                <Link to={{
                    pathname: '/report',
                    age: {type: "tclass"}
                }}>
                    <Button
                        style={{ marginLeft: "300px", width: "300px", height:"60px" , background:'#7e65b0'}}
                        variant="contained"
                        color="primary"
                        size="large"
                    >Check Class Report</Button>
                </Link>

                <Link to={{
                    pathname: '/report',
                    age: {type: "tAnn"}
                }}>
                    <Button
                        style={{ marginLeft: "200px", width: "300px", height:"60px" , background:'#7e65b0'}}
                        variant="contained"
                        color="primary"
                        size="large"
                    >Check Announcement Report</Button>
                </Link>
            </div>
        <br/>
            <Footer/>
        </div>


    )
}

export default AdminDashboard