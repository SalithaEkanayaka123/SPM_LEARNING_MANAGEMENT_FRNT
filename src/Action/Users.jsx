import {ADD_USER, GET_USER, UPDATE_USER, DELETE_USER, FETCH_USERS, VALID_USER} from "./types";
import axios from "axios";
import * as api from '../API'
export const fetchStudents = () => dispatch => {
    console.log('fetching');
    axios.get(api.baseURL + 'students')
        .then(response => {
            dispatch({
                type: FETCH_USERS,
                payload: response
            })}

        ).catch((err) => {

        console.log(err);
    })
}

export const fetchTeachers = () => dispatch => {
    console.log('fetching');
    axios.get(api.baseURL + '/teachers')
        .then(response => {
            dispatch({
                type: FETCH_USERS,
                payload: response
            })}

        ).catch((err) => {

        console.log(err);
    })
}


export const fetchUser = () => dispatch => {
    console.log('fetching');
    axios.get(api.baseURL + '/students')//api.baseURL + 'deleteuser'
        .then(response => {
            dispatch({
                type: FETCH_USERS,
                payload: response
            })}
        ).catch((err) => {
        console.log(err);
    })
}

export const addUsers = (PostData) => async (dispatch) => {
    console.log('creating');
    try{
        const { data } = await api.createUser(PostData);
        dispatch({type: ADD_USER, payload: data });
    } catch (error){
        console.log(error);
    }
}

export const loginUserValidation = (user) => async (dispatch) => {
    console.log('creating');
    try {
        const data= await api.validateUser(user);
        console.log('data ', data);
        dispatch({type: VALID_USER, payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const deleteUsers = (id) => dispatch => {
    console.log('creating');
    axios.delete(api.baseURL + 'deleteuser/'+ id)
        .then(response => {
                dispatch({
                    type: DELETE_USER,
                    payload: id
                })
          // alert("data deleted sucessfully");
            }

        ).catch((err) => {
        console.log(err);
    })
}


export const getUserByID = (data) => dispatch => {
    dispatch({
        type: GET_USER,
        payload: data
    })
}



export const upDateUser = (PostData, id) => dispatch => {
    axios.put(api.baseURL + 'updateuser/' + id , PostData)
        .then(response => {
                dispatch({
                    type: UPDATE_USER,
                    payload: response.data
                })
                alert("data updated successfully");
            }

        ).catch((err) => {
        console.log(err);
    })
}
