import {ADD_COURSES, DELETE_USER, FETCH_COURSES, REMOVE_COURSES} from "./types";

import axios from "axios";
import * as api from '../API'
//Axios Method to fetch items from the database.
export const fetchCourses = () => dispatch => {
    axios.get(api.baseURL + 'courses/')
        .then(response => {
            dispatch({
                type: FETCH_COURSES,
                payload: response.data
            })}
        ).catch((err) => {
        console.log(err);
    })
}
//Axios Method to add course items to the database.
export const addCourse = (Course) => async (dispatch) => {
    try{
        const { data } = await api.createCourse(Course);
        dispatch({type: ADD_COURSES, payload: data });
        alert("data added successfully");
    } catch (error){
        console.log(error);
    }
}
//Axios Method to delete the Course Items
export const deleteCourse = (id) => dispatch => {
    axios.delete(api.baseURL + 'delete/course/'+ id)
        .then(response => {
                dispatch({
                    type: REMOVE_COURSES,
                    payload: id
                })
            }
        ).catch((err) => {
        console.log(err);
    })
}
