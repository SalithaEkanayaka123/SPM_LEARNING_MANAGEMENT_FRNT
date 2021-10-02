import React, {useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./Component/NavigationBar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/Registration/RegistrationPage";
import TutorDashboard from "./Pages/TutorDashboard/TutorDashboard";
import NavBarButtonComponent from "./Component/NavigationBar/NavBarButtonComponent";
import NavBarButtonComponent2 from "./Component/NavigationBar/NavBarButtonComponent2";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import UserProfilePage from "./Pages/UserProfile/UserProfilePage";
import ClassPage from "./Pages/ClassPage/ClassPage";
import {ProtectedRoute} from "./Validation/ProtectedRoutes";
import UserDetailsUpdateComponent from "./Component/Profile/UserDetailsUpdateComponent";
import SingleClassView from "./Pages/SingleClass/SingleClassView";
import ClassCourseview from "./Pages/ClassCourseview/ClassCourseview";
import DownloadFile from "./Component/Downloads/DownloadFile";
import PopUpTeacherStatusComponent from "./Component/PopupModel/TeacherStatus/PopUpTeacherStatusComponent";
import CustomVideoPlayerComponent from "./Component/Tutor/CustomVideoPlayerComponent/CustomVideoPlayerComponent";
import VideoResourcePage from "./Pages/VideoResourcePage/VideoResourcePage";
import PopUpUpdate from "./Component/Admin/ClassMgntInt/PopUpUpdate/PopUpUpdate";
import ReactToPrintClass from "./Pages/TutorReportPage/ReactToPrint/ReactToPrint";
import TestingReport from "./Component/Report/TestingReport";


import TutorReportPage from "./Pages/TutorReportPage/TutorReportPage";
import TestingReport2 from "./Component/Report/TestingReport2";
import TestingReport3 from "./Component/Report/TestingReport3";





const App = () => {
//Add the React Router And Create Routing
  return (
          <BrowserRouter>
              <Navbar/>
              <Switch>
                  <ProtectedRoute exact path="/tutordash" >
                      <TutorDashboard/>
                  </ProtectedRoute>
                  <Route exact path = "/home" component={HomePage}/>
                  <Route exact path = "/" component={HomePage}/>
                  <ProtectedRoute exact path = "/profile" component={UserProfilePage}/>
                  <Route exact path = "/login" component={LoginPage}/>
                  <Route exact path = "/registration" component={RegistrationPage}/>

                  {/*<Route exact path = "/tutordash" component={TutorDashboard}/>*/}

                  <ProtectedRoute exact path = "/admindash" component={AdminDashboard}/>

                  <Route exact path = "/navbarbuttoncomponent" component={NavBarButtonComponent}/>
                  <Route exact path = "/navbarbuttoncomponent2" component={NavBarButtonComponent2}/>
                  <Route exact path = "/emailupdate" component={UserDetailsUpdateComponent}/>
                  <ProtectedRoute exact path = "/class" component={ClassPage}/>
                  <Route exact path = "/ClassCourseview" component={ClassCourseview}/>
                  <Route exact path = "/singleclassview" component={SingleClassView}/>
                  <Route exact path = "/download" component={DownloadFile}/>
                  <Route exact path = "/teacherstatuspopup" component={PopUpTeacherStatusComponent}/>
                  <Route exact path = "/customvideoplayer" component={CustomVideoPlayerComponent}/>
                  <Route exact path = "/video" component={VideoResourcePage}/>
                  <Route exact path = "/report" component={ReactToPrintClass}/>
                  <Route exact path = "/reportold" component={TutorReportPage}/>
                  <Route exact path = "/popup" component={PopUpUpdate}/>
                  <Route exact path = "/tes" component={TestingReport3}/>
              </Switch>
          </BrowserRouter>
  )
}
export default App;
