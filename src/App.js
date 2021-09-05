import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./Component/NavigationBar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import UserProfile from "./Pages/StudentProfilePage/UserProfile";
import RegistrationPage from "./Pages/Registration/RegistrationPage";
import TutorDashboard from "./Pages/TutorDashboard/TutorDashboard";
import NavBarButtonComponent from "./Component/NavigationBar/NavBarButtonComponent";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import UserProfilePage from "./Pages/UserProfile/UserProfilePage";

import ClassPage from "./Pages/ClassPage/ClassPage";

import {ProtectedRoute} from "./Validation/ProtectedRoutes";

import {Provider} from "react-redux";
import store from "./store";
import EmailUpdateComponent from "./Component/Profile/EmailUpdateComponent";
import SingleClassView from "./Pages/SingleClass/SingleClassView";
import ClassCourseview from "./Pages/ClassCourseview/ClassCourseview";
import DownloadFile from "./Component/Downloads/DownloadFile";
import PopUpTeacherStatusComponent from "./Component/PopupModel/TeacherStatus/PopUpTeacherStatusComponent";
import VideoComponentInterface from "./Component/VideoComponent/VideoComponentInterface";


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
                  <Route exact path = "/profile" component={UserProfilePage}/>
                  <Route exact path = "/login" component={LoginPage}/>
                  <Route exact path = "/registration" component={RegistrationPage}/>
                  {/*<Route exact path = "/tutordash" component={TutorDashboard}/>*/}
                  <Route exact path = "/admindash" component={AdminDashboard}/>
                  <Route exact path = "/navbarbuttoncomponent" component={NavBarButtonComponent}/>
                  <Route exact path = "/emailupdate" component={EmailUpdateComponent}/>
                  <Route exact path = "/class" component={ClassPage}/>
                  <Route exact path = "/ClassCourseview" component={ClassCourseview}/>
                  <Route exact path = "/singleclassview" component={SingleClassView}/>
                  <Route exact path = "/download" component={DownloadFile}/>
                  <Route exact path = "/teacherstatuspopup" component={PopUpTeacherStatusComponent}/>
                  <Route exact path = "/videocomponent" component={VideoComponentInterface}/>
              </Switch>
          </BrowserRouter>
  )
}
export default App;
