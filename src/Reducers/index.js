import { combineReducers } from "redux";
import courses from './courses'
import UserReducer from './UserReducer'
import errorsReducer from './errorsReducer'
import classes from './Classes'
import paymentDetails from './PaymentData'
import Announcement from './Announcement'
import images from './ClassesNew'

export default combineReducers({
    userDetails1: UserReducer,
    errors: errorsReducer,
    paymentDetails:paymentDetails,
    courses,
    classes,
    Announcement,
    images,

});
