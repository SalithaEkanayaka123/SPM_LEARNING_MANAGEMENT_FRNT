import axios from 'axios'
const url = "http://localhost:8073/api/";
//register user
export const createUser = (user) =>  axios.post(url + "useradd", user);
//validate user
export const validateUser = (user) => axios.post(url + "validate", user);
//export URL
export const baseURL = url
//Add new Course
export const createCourse = (course) => axios.post(url + "course", course);
/**
 * Get Course Directly Called from the URL export.
 * **/

//add class
export const createClass = (clz) => axios.post(url + "class", clz);

//add payment
export const createPayment = (pay) => axios.post(url + "addPayment", pay);






