import React, {useEffect, useState} from 'react'
import "./TutorDashboard.scss"
import TutorDashHeader from "../../Component/Tutor/Header/TutorDashHeader";
import CourseMgntInt from "../../Component/Tutor/CourseMgntInt/CourseMgntInt";
import FileAttachInt from "../../Component/Tutor/FileAttachInt/FileAttachInt";
import InqFeedInt from "../../Component/Tutor/InqFeedInt/InqFeedInt";
import StudentTableComponent from "../../Component/Tutor/StudentTable/StudentTableCompoenent";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourses} from "../../Action/Courses";
import InqPopUpMenu from "../../Component/Tutor/InqFeedInt/Inquiry/InqPopUpMenu/InqPopUpMenu";
import {faUserFriends} from "@fortawesome/free-solid-svg-icons";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
import {faDollarSign} from "@fortawesome/free-solid-svg-icons";
import {faPencilRuler} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router";
import axios from "axios";
import {Container, Grid} from "@material-ui/core";
import {fetchStudents, getUserCount} from "../../Action/Users";
import {Link} from "react-router-dom";
import Button from "@progress/kendo-react-buttons/dist/es/Button";
import SampleTable from "../TutorReportPage/SampleData/SampleTable/SampleTable";
function TutorDashboard() {

    let usertype = localStorage.getItem("usertype")
    let status = localStorage.getItem("status")
    console.log(usertype)
    const history = useHistory();

    //User Validation Upon Landing On the Page -- Temporarily Disable.
    useEffect(()=> {
        if(usertype != "teacher" && usertype != "admin"){
            history.push('./login')
            //window.location.href='/login';
        } else {
            if (status != "valid"){
                history.push('./login')
            }
            //setFlag(true);
          getItems();
          getCourses();
          dispatch(getUserCount());
          dispatch(fetchStudents());
        }
  
    const response = useSelector((state) => state.userDetails1?.usercount?.data);
    const response1 = useSelector((state) => state.userDetails1?.UserDetails?.records?.data);

    //Method to fetch all the feedback information.
    async function getItems() {
        const response = await axios.get("http://localhost:8073/feedback");
        const data = response.data;
        const options = data.map(item => ({
            "header": item.name,
            "description": item.message,
        }))
        setFeedback(options);
    }

    //State to hold the popup menu.
    const [trigger, setTrigger] = useState(false);
    const [triggerData, setTriggerData] = useState({
        header: 'No Data',
        description: 'No Data'
    });
    const [feedback, setFeedback] = useState([]);


    const courses = useSelector((state) => state.courses);
    const dispatch = useDispatch();
    useEffect(() => {
        getCourses();
    }, [])

    //Get Course Data
    const getCourses = () => {
        dispatch(fetchCourses());
    }

    //Data Arrays.
    //Array for the announcement component.
    const array1 = [
        {"header": "Kamal", "description": "New News Update available"},
        {"header": "Kamal", "description": "New News Update available"},
        {"header": "Kamal", "description": "New News Update available"},
        {"header": "Kamal", "description": "New News Update available"},
        {"header": "Kamal", "description": "New News Update available"},
        {"header": "Kamal", "description": "New News Update available"}];

    //Array for the inquiry component.
    const array2 = [
        {"header": "Kamal", "description": "New News Update available"},
        {"header": "Nimal", "description": "New News Update available"},
        {"header": "Kamal", "description": "New News Update available"},
        {"header": "Kamal", "description": "New News Update available"},
        {"header": "Kamal", "description": "New News Update available"},
        {"header": "Kamal", "description": "New News Update available"}];

    //Array for the courses. course table.
    const array3 = [
        {"header": "Kamal", "description": "New News Update available", "body": "This is the subject body"},
        {"header": "Kamal", "description": "New News Update available", "body": "This is the subject body"},
        {"header": "Kamal", "description": "New News Update available", "body": "This is the subject body"},
        {"header": "Kamal", "description": "New News Update available", "body": "This is the subject body"},
        {"header": "Kamal", "description": "New News Update available", "body": "This is the subject body"},
        {"header": "Kamal", "description": "New News Update available", "body": "This is the subject body"}];

    //JSON object for the headers
    const array4 = [
        {"header": "Total Student:", "count": response?.at(1), "image": faUserFriends},
        {"header": "Feedback", "count": "3", "image": faCommentAlt},
        {"header": "Courses", "count": "6", "image": faBookOpen},
        {"header": "Class", "count": "5", "image": faSchool},
        {"header": "Income", "count": "LKR 1256.23", "image": faDollarSign},
        {"header": "Materials", "count": "10", "image": faPencilRuler},
        {"header": "Active Students", "count": "23", "image": faUser},
        {"header": "Disabled Courses", "count": "6", "image": faTimes},
    ];

    console.log(courses);
    return (
        <div className="tutor-dashboard-page">
            <Container midWidth="md">
                <TutorDashHeader array5={array4}/>
                <CourseMgntInt array4={courses}/>
                <FileAttachInt array4={courses}/>
                <InqFeedInt array1={feedback}
                            array2={array2}
                            setTrigger={setTrigger}
                            setTriggerData={setTriggerData}
                            triggerData={triggerData}/>
                <div className="report-triggering-button-container">
                    <div className="report-triggering-button">
                            <div className="button-item">

                                <Link to={{
                                    pathname: '/report',
                                    age: {type: "tutor"}
                                }}><Button primary={true}>Generate File Reports</Button></Link>
                            </div>

                            <div className="button-item">
                                <Link to={{
                                    pathname: '/report',
                                    age: {type: "tutor2"}
                                }}><Button primary={true}>Course table</Button></Link>
                            </div>

                            <div className="button-item">
                                <Link to={{
                                    pathname: '/report',
                                    age: {type: "tutor3"}
                                }}><Button primary={true}>Video stats</Button></Link>
                            </div>

                    </div>
                </div>
                <StudentTableComponent response1={response1}/>
                <InqPopUpMenu trigger={trigger}
                              setTrigger={setTrigger}
                              triggerHeader={triggerData}
                />
            </Container>

        </div>
    )
}

export default TutorDashboard
