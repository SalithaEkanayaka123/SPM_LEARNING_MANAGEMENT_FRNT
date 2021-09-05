import { combineReducers } from "redux";
import courses from './courses'
import UserReducer from './UserReducer'
import classes from './Classes'
import paymentDetails from './PaymentData'

export default combineReducers({
    userDetails1: UserReducer,
    paymentDetails:paymentDetails,
    courses,
    classes
});
